import { uploadImage } from "@/cloudinary/index";
import { app } from "@/firebase/server";
import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { promises as fs } from "fs";

type typeFormData = {
  brand: string;
  model: string;
  camera: string;
  cameraFront: string;
  disk: string;
  memory: string;
  processor: string;
  inches: string;
  battery: string;
  price: string;
  financials: string;
  celya: boolean;
  krediya: boolean;
  aloCred: boolean;
  initial: string;
  celImg: File;
  quotas: string;
  addQuota: string;
};

export const POST: APIRoute = async ({ request, redirect }) => {
  let outputPath = "";
  try {
    const formData = await request.formData();

    const values = Object.fromEntries(formData.entries()) as typeFormData;

    if (JSON.stringify(values) === "{}") {
      return new Response("No se proporciono datos", { status: 400, statusText: "No se proporciono datos" });
    }

    const installments = values.quotas.split(",").map((item) => {
      const values = item.split("-");
      return {
        quantity: Number(values[0]),
        price: Number(values[1].replace(/\./g, "")),
      };
    });

    // Subir la imagen a Cloudinary
    const uploadResult = await uploadImage(values.celImg);
    const imageUrl = uploadResult.secure_url;

    const valuesToSend = {
      brand: values.brand,
      model: values.model,
      rear_camera_mp: values.camera,
      front_camera_mp: values.cameraFront,
      rom_memory_gb: values.disk,
      ram_memory_gb: values.memory,
      processor: values.processor,
      screen_inches: values.inches,
      battery_mah: values.battery,
      financials: values.financials.split(", "),
      savings: parseInt(values.price.replace(/\./g, "")),
      installments: installments,
      initial: parseInt(values.initial.replace(/\./g, "")),
      image: imageUrl,
      isVisible: true,
    };

    const db = getFirestore(app);
    const docRef = await db.collection("catalog");
    await docRef.add(valuesToSend);
    return redirect("/");
  } catch (e) {
    console.error("Error durante la creación:", e);
    let moreError = "";
    if (outputPath) {
      try {
        await fs.unlink(outputPath);
      } catch (unlinkError) {
        console.error("Error al eliminar el archivo:", unlinkError);
        moreError = "Error al eliminar el archivo";
      }
    }
    return new Response("Error durante la creación", {
      status: 400,
      statusText: `Error durante la creación ${moreError}`,
    });
  }
};
