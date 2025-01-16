import { app } from "@/firebase/server";
import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

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
  console.log("--------------------------");
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries()) as typeFormData;

  if (JSON.stringify(values) === "{}") {
    return new Response("No se proporciono datos", { status: 400 });
  }

  const installments = values.quotas.split(",").map((item) => {
    const values = item.split("-");
    return {
      quantity: Number(values[0]),
      price: Number(values[1]),
    };
  });

  const file = values.celImg;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const webp = await sharp(buffer).webp().toBuffer();
  const outputPath = path.join(process.cwd(), "src", "images", "catalog", `${values.brand}-${values.model}.webp`);
  await fs.writeFile(outputPath, webp);

  const valuesToSend = {
    brand: values.brand,
    model: values.model,
    rear_camera_mp: Number(values.camera),
    front_camera_mp: Number(values.cameraFront),
    rom_memory_gb: Number(values.disk),
    ram_memory_gb: Number(values.memory),
    processor: values.processor,
    screen_inches: Number(values.inches),
    battery_mah: Number(values.battery),
    financials: values.financials.split(", "),
    savings: Number(values.price),
    installments: installments,
    image: `/src/images/catalog/${values.brand}-${values.model}.webp`,
    isVisible: true,
  };

  try {
    const db = getFirestore(app);
    const docRef = await db.collection("catalog");
    await docRef.add(valuesToSend);
  } catch (e) {
    await fs.unlink(outputPath);
    return new Response("Error durante la creación", { status: 500 });
  }
  return redirect("/");
};
