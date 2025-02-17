// Los archivos(video) se envia con un formData desde el front-end
// Usando express y express-fileupload en back-end

import express from "express";
import fileUpload from "express-fileupload";
import cloudinary from "./config";
const app = express();
app.use(fileUpload());

// Endpoint para subir videos MP4

app.post("/upload/video", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No se envió el video" });
    }

    const videoFile = req.files.file;
    const result = await cloudinary.uploader.upload(videoFile.tempFilePath, {
      resource_type: "video", // Especificamos que es un video
      folder: "uploads/videos", // Carpeta para videos
    });

    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para subir videos gif

app.post("/upload/gif", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No se envió el GIF" });
    }

    const gifFile = req.files.file;
    const result = await cloudinary.uploader.upload(gifFile.tempFilePath, {
      resource_type: "auto", // Cloudinary maneja automáticamente el tipo de archivo (gif)
      folder: "uploads/gifs", // Carpeta para GIFs
    });

    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
