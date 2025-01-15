import { app } from "@/firebase/server";
import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";

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
  const formData = await request.json().then((formData) => formData as typeFormData);

  if (JSON.stringify(formData) === "{}") {
    return new Response("No se proporciono datos", { status: 400 });
  }

  const installments = formData.quotas.split(",").map((item) => {
    const values = item.split("-");
    return {
      quantity: Number(values[0]),
      price: Number(values[1]),
    };
  });

  console.log(formData);

  const values = {
    brand: formData.brand,
    model: formData.model,
    rear_camera_mp: Number(formData.camera),
    front_camera_mp: Number(formData.cameraFront),
    rom_memory_gb: Number(formData.disk),
    ram_memory_gb: Number(formData.memory),
    processor: formData.processor,
    screen_inches: Number(formData.inches),
    battery_mah: Number(formData.battery),
    financials: formData.financials.split(", "),
    savings: Number(formData.price),
    installments: installments,
    image: formData.celImg,
    isVisible: true,
  };

  try {
    const db = getFirestore(app);
    const docRef = await db.collection("catalog");
    await docRef.add(values);
  } catch (e) {
    return new Response("Error durante la creación", { status: 500 });
  }
  return redirect("/");
};
