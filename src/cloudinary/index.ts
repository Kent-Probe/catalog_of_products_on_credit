import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";

// Configuration
cloudinary.config({
  cloud_name: "dfnez7kts",
  secure: true,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File) {
  try {
    // Convertir el archivo en un Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imageBufferWebp = await sharp(buffer).webp().toBuffer();

    // Subir la imagen a Cloudinary usando una Promesa
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
      uploadStream.end(imageBufferWebp);
    });

    return uploadResult;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
}
