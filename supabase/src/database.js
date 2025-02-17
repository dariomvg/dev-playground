// Funciones para manejar la base de datos

import supabase from "./config";


// Eliminar datos

const response = await supabase
  .from('countries')
  .delete()
  .eq('id', 1);


// Insertar datos
const { errorInsert } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Mordor' });


// Editar datos
const { errorUpdate } = await supabase
  .from('instruments')
  .update({ name: 'piano' })
  .eq('id', 1);


// Obtener datos

const { data, errorGet } = await supabase
  .from('characters')
  .select();

// Obtener datos
