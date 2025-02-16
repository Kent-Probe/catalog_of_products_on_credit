import { deleteImage, uploadImage } from "@/cloudinary/index";
import { app } from "@/firebase/server";
import { productsWithFilters } from "@/store/store";
import type { ProductsType } from "@/type/products";
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
      id: crypto.randomUUID(),
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

export const PATCH: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const values = Object.fromEntries(formData.entries()) as typeFormData & { id: string } & {
      uriImage: string | undefined;
    };

    if (JSON.stringify(values) === "{}") {
      return new Response(null, { status: 400, statusText: "No se proporciono datos" });
    }

    const productOld = (productsWithFilters.value as ProductsType[]).find((item) => item.id === values.id);
    if (!productOld) {
      return new Response(null, { status: 404, statusText: "Producto no encontrado" });
    }

    const installments = values.quotas.split(",").map((item) => {
      const values = item.split("-");
      return {
        quantity: Number(values[0]),
        price: Number(values[1].replace(/\./g, "")),
      };
    });

    const productNew = {
      id: values.id,
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
      image: values.uriImage || undefined,
      isVisible: true,
    };
    const valueToUpdate = compareEntries(productOld, productNew);

    if (values.celImg) {
      const uploadResult = await uploadImage(values.celImg);
      valueToUpdate.image = uploadResult.secure_url;
      if (productOld.image) await deleteImage(productOld.image);
    }

    if (Object.keys(valueToUpdate).length === 0) {
      return new Response(null, { status: 200, statusText: "No hay cambios" });
    }

    const db = getFirestore(app);
    const docRef = await db.collection("catalog");
    const doc = await docRef.where("id", "==", values.id).get();
    await docRef.doc(doc.docs[0].id).update(valueToUpdate);
    return redirect("/");
  } catch (e) {
    console.error("Error durante la actualización:", e);
    return new Response("Error durante la actualización", {
      status: 400,
      statusText: "Error durante la actualización",
    });
  }
};

function compareEntries(objectOld, objectNew) {
  const entriesOld = Object.entries(objectOld);
  const entriesNew = Object.entries(objectNew);
  let objectDifference = {};
  entriesNew.forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    const valueOld = objectOld[key];
    if (typeof value !== "object" && value !== valueOld) {
      objectDifference[key] = value;
    } else if (typeof value === "object") {
      if (value.sort().toString() !== valueOld.sort().toString()) {
        objectDifference[key] = value;
      }
    }
  });
  return objectDifference;
}
