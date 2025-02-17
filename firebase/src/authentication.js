// Autenticación

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Authetication = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <button onClick={login}>Iniciar sesión con Google</button>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};


