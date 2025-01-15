import { a as app } from '../../chunks/server_DFiT9_Sm.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.json().then((formData2) => formData2);
  if (JSON.stringify(formData) === "{}") {
    return new Response("No se proporciono datos", { status: 400 });
  }
  const installments = formData.quotas.split(",").map((item) => {
    const values2 = item.split("-");
    return {
      quantity: Number(values2[0]),
      price: Number(values2[1])
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
    installments,
    image: formData.celImg,
    isVisible: true
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
