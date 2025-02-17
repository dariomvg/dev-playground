// Uso de datos en tiempo real, por ejemplo: chats

import supabase from "./config";

// Suscribirse a un canal
const channel = supabase.channel("room1");

channel
  .on("broadcast", { event: "nombre-evento" }, (payload) => { // acá se conecta al canal real para escuchar eventos
    console.log("Cursor position received!", payload);
  })
  .subscribe((status) => {
    if (status === "SUBSCRIBED") { // verifica si estas subscripto para enviar los datos
      channel.send({
        type: "broadcast", // Transmición
        event: "nombre-evento", // Evento
        payload: { x: Math.random(), y: Math.random() }, // Aca van los datos que quieres enviar
      });
    }
  });

// Desuscribirse de un canal
supabase.removeChannel("nombre-del-canal");

// Desuscribirse de todos los canales

supabase.removeAllChannels();

// Recuperar todos los canales
const channels = supabase.getChannels();

// Enviar datos al canal si estas autorizado o suscripto
supabase.channel("room1").subscribe((status) => {
  if (status === "SUBSCRIBED") {
    channel.send({
      type: "broadcast",
      event: "nombre-evento",
      payload: { x: Math.random(), y: Math.random() }, // Aca van los datos que quieres enviar
    });
  }
});
