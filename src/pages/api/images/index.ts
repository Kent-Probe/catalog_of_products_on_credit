import { updateImage } from "@/cloudinary";
import { app } from "@/firebase/server";
import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";

type typeFormData = {
  file: File;
  upload_preset: string;
  imageCurrent: string;
};

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const values = Object.fromEntries(formData.entries()) as typeFormData;

    if (JSON.stringify(values) === "{}" || !values.upload_preset || !values.file) {
      return new Response(null, { status: 400, statusText: "No se proporciono datos" });
    }

    const updateImageResult = await updateImage(values.file, values.imageCurrent);
    const result = new FormData();
    result.append("secure_url", updateImageResult.secure_url);

    const db = getFirestore(app);
    await db.collection("config").doc("page").update({ banner: updateImageResult.secure_url });

    return new Response(result, {
      status: 200,
      statusText: "Datos guardados",
    });
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    return new Response(null, { status: 500, statusText: "Error al guardar los datos" });
  }
};
