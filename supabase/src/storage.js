// Para guardar archivos binarios como imagenes, videos, etc.

import supabase from "./config";

// Agregar una nueva imagen
const { data, error } = await supabase.storage
  .from("avatars") // Nombre del bucket
  .upload("folder/imagen.jpg", file, {
    // Nombre de la carpeta y archivo
    upsert: false, // Para no sobreescribir ninguna imagen
  });

// Cambiar/actualizar una imagen por otra(mismo lugar)

const { data1, error1 } = await supabase.storage
  .from("avatars")
  .upload("folder/imagen.jpg", file, {
    upsert: true, // Sobrescribe el archivo si ya existe
  });

// Eliminar una imagen

const { data2, error2 } = await supabase.storage
  .from("avatars")
  .remove(["folder/imagen.jpg"]);

// Obtener una imagen

const { data3, error3 } = await supabase.storage
  .from("avatars")
  .getPublicUrl("folder/imagen.jpg");

// Obtener todas las imagenes de una carpeta

const { data4, error4 } = await supabase.storage
  .from("avatars") // Nombre del bucket
  .list("imagenes");

// Crear un bucket

const { data5, error5 } = await supabase.storage.createBucket("avatars", {
  public: false, // si deseas manejar el bucket debe ser true
  allowedMimeTypes: ["image/png"], // formato permitido
  fileSizeLimit: 1024, // límite de tamaño
});

// Crear una carpeta: no hay una forma de crear una explícitamente.
// pero al agregar una imagen, puedes colocar el nombre de la carpeta y esta se crear automáticamente

const { data6, error6 } = await supabase.storage
  .from("avatars")
  .upload("imagenes/nueva_imagen.jpg", file, {
    // 'imagenes/' es la "carpeta" que se crea automáticamente
    cacheControl: "3600", // Control de caché (opcional)
    upsert: false, // No sobrescribir si ya existe
  });

// Objeto data que retorna supabase.storage

const objData = {
  Key: "imagenes/nueva_imagen.jpg", // Ruta completa del archivo en el bucket
  Bucket: "avatars", // Nombre del bucket
  Location:
    "https://your-supabase-project-id.supabase.co/storage/v1/object/public/avatars/imagenes/nueva_imagen.jpg", // URL pública (si se configura para acceso público)
  Etag: "e9f734a9e292e3f1bff5d98fc8d3d3a4", // Hash ETag (etiqueta para la verificación de integridad)
  Size: 1024, // Tamaño del archivo en bytes
  MimeType: "image/jpeg", // Tipo MIME del archivo
  CreatedAt: "2025-02-10T12:34:56Z", // Fecha y hora de creación
};
