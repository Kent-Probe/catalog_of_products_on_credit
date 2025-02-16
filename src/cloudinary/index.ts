import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";

// Configuration
cloudinary.config({
  cloud_name: "dfnez7kts",
  secure: true,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File, public_id: string | null) {
  try {
    // Convertir el archivo en un Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imageBufferWebp = await sharp(buffer).webp().toBuffer();

    // Subir la imagen a Cloudinary usando una Promesa
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "image", public_id: public_id },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(imageBufferWebp);
    });

    return uploadResult;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
}

export async function deleteImage(imageUrl: string) {
  try {
    const publicId = imageUrl.split("/").pop()?.split(".")[0];
    if (!publicId) {
      throw new Error("Invalid image URL");
    }

    const deleteResult = await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    return deleteResult;
  } catch (error) {
    console.error("Error al borrar la imagen:", error);
    throw error;
  }
}

export async function updateImage(file: File, imageUrl: string) {
  try {
    const deleteResult = await deleteImage(imageUrl);
    if (deleteResult.result !== "ok") {
      throw new Error("Error al borrar la imagen");
    }
    const uploadResult = await uploadImage(file, imageUrl.split("/").pop()?.split(".")[0]);
    return uploadResult;
  } catch (error) {
    console.error("Error al actualizar la imagen:", error);
    throw error;
  }
}
