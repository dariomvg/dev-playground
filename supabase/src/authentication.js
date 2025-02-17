// Manejo de autenticación

import supabase from "./config";

// Registrar nuevo usuario, envia un email de confirmación
const { data1, error1 } = await supabase.auth.signUp({
  email: "example@email.com",
  password: "example-password",
});

// Iniciar sesión

const { data2, error2 } = await supabase.auth.signInWithPassword({
  email: "example@email.com",
  password: "example-password",
});

// Cerrar sesión

const { error3 } = await supabase.auth.signOut();

// Cambiar contraseña, enviando email para mensaje de recuperación

const { data4, error4 } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: "https://example.com/update-password",
});

const { data5, error5 } = await supabase.auth.updateUser({
  password: new_password,
});

// Actualizar usuario

const { data6, error6 } = await supabase.auth.updateUser({
    email: 'new@email.com'
  })
  