import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: "user", // Dirrección de correo electrónico
  password: "password", // contraseña del correo
  host: "smtp.gmail.com", // Dirección del servidor SMTP de tu proveedor de correo
  ssl: true, // false si usa STARTTLS
});

// Nota: En contraseña no debes usar tu contraseña actual, por seguridad, debes crear una nueva en: https://myaccount.google.com/

try {
  const message = await client.sendAsync({
    text: "Este es mi mensaje", // Mensaje a enviar
    from: "your-email.gmail.com", // Tu email
    to: "someone-email@gmail.com, anothe-email@gmail.com", // puede recibir 1 o 2 emails de destino
  });
  console.log(message);
} catch (err) {
  console.error(err);
}

const options = {
  user,
  password,
  host,
  port,
  ssl,
  tls,
  timeout,
  domain,
  authentication,
  logger,
};
