// Subir una imagen en cloudStorage

import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CloudStorage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const uploadFile = async () => {
    if (!file) return;
    const fileRef = ref(storage, `images/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    setUrl(fileURL);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={uploadFile}>Subir Imagen</button>
      {url && <img src={url} alt="Uploaded" width="100" />}
    </div>
  );
};

export default UploadImage;
