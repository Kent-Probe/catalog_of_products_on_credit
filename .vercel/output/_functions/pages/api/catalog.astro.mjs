import { a as app } from '../../chunks/server_DFiT9_Sm.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { promises } from 'fs';
import path from 'path';
import sharp from 'sharp';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  console.log("--------------------------");
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());
  if (JSON.stringify(values) === "{}") {
    return new Response("No se proporciono datos", { status: 400 });
  }
  const installments = values.quotas.split(",").map((item) => {
    const values2 = item.split("-");
    return {
      quantity: Number(values2[0]),
      price: Number(values2[1])
    };
  });
  const file = values.celImg;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const webp = await sharp(buffer).webp().toBuffer();
  const outputPath = path.join(process.cwd(), "src", "images", "catalog", `${values.brand}-${values.model}.webp`);
  await promises.writeFile(outputPath, webp);
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
    installments,
    image: `/src/images/catalog/${values.brand}-${values.model}.webp`,
    isVisible: true
  };
  try {
    const db = getFirestore(app);
    const docRef = await db.collection("catalog");
    await docRef.add(valuesToSend);
  } catch (e) {
    await promises.unlink(outputPath);
    return new Response("Error durante la creación", { status: 500 });
  }
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
