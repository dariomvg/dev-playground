// Subir imagen como cadena en Base64
const base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";

await cloudinary.uploader.upload(base64Image, {
  folder: "histories",
});

// Subir imagen desde una ruta local(imagen ya en el servidor)

await cloudinary.uploader.upload("./uploads/image.jpg", {
  folder: "histories",
});

// Subir imagen desde una URL pública (imagen ya está en internet)

await cloudinary.uploader.upload("https://example.com/image.jpg", {
  folder: "histories",
});

// Subir imagen recibiendo un File desde el Back-end(usando express.js, express-fileupload, fs)

import express from "express";
import fileUpload from "express-fileupload";
import fs from "fs"; // Para eliminar archivos
const app = express();

app.use(fileUpload({ useTempFiles: true, tempFileDir: "./uploads" })); // Middleware para manejar archivos

app.post("/upload", async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: "No se envió ninguna imagen" });
    }

    const imageFile = req.files.image;

    
    const result = await cloudinary.uploader.upload(imageFile.tempFilePath, { // Subir a Cloudinary usando archivo temporal
      folder: "uploads",
    });

    
    fs.unlinkSync(imageFile.tempFilePath); // Eliminar el archivo temporal manualmente

    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// JSON que retorna la subida de la imagen
const json = { 
  "asset_id": "abcd1234",
  "public_id": "histories/sample_image", // ID único de la imagen en Cloudinary.
  "version": 1700000000,
  "version_id": "abcdef1234567890",
  "signature": "abcdef1234567890abcdef1234567890",
  "width": 1200,
  "height": 800,
  "format": "jpg", // Formato de la imagen (JPEG, PNG, etc.).
  "resource_type": "image",
  "created_at": "2025-02-10T12:34:56Z", // Fecha de subida.
  "tags": [],
  "bytes": 456789, // Tamaño en bytes.
  "type": "upload",
  "etag": "abcdef1234567890abcdef",
  "placeholder": false,
  "url": "http://res.cloudinary.com/tu_cloud/image/upload/v1700000000/histories/sample_image.jpg",
  "secure_url": "https://res.cloudinary.com/tu_cloud/image/upload/v1700000000/histories/sample_image.jpg", // URL segura para acceder a la imagen.
  "original_filename": "my_uploaded_image"
}

// Acepta los siguientes formatos de imagen: 

// 1. JPEG-JPEG
// 2. PNG
// 3. GIF 
// 4. WEBP
// 5. SVG 
// 6. BMP 
// 7. TIFF / TIF 
// 8. ICO