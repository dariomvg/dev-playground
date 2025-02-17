// Cuando se sube el archivo, retorna un objeto dónde esta el publicId, solo con
// este id se puede eliminar el archivo subido.

import cloudinary from "./config";

// eliminar un gif

await cloudinary.uploader.destroy(public_id, {
  resource_type: "auto", // Cloudinary maneja automáticamente el tipo (gif)
});

// eliminar un video

await cloudinary.uploader.destroy(public_id, {
  resource_type: "video", // Especificamos que es un video
});

// eliminar una imagen

await cloudinary.uploader.destroy(public_id);
