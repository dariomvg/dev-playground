// Manejo de base de datos PostgreSQL con el paquete "postgres"
import { sql } from "./config";

// SELECT

const users = await sql`SELECT * FROM users`;
// Por ejemplo: users = [{ name: 'Murray', age: 68 }]



// INSERT

const newUser =
  await sql`INSERT INTO users (name, age) VALUES ('Albert', '55') RETURNING name, age`;
// newUser = [{name: "Albert", age: "55"}];

const name = "Isaac";
const age = "76";
const newUser2 =
  await sql`INSERT INTO users (name, age) VALUES (${name}, ${age}) RETURNING name, age`;
// newUser2 = [{name: "Isaac", age: "76"}]



// DELETE

const userDeleted = await sql`DELETE FROM users WHERE id=1 RETURNING *`;
// userDeleted = [{id:"1", name: "Nicólas", age: "36"}]



// UPDATE

const userUpdated =
  await sql`UPDATE users SET name="James Clerk", age="45" WHERE id=1 RETURNING *`;
// userUpdated = [{id: "1", name: "James Clerk", agre: "45"}];

const newName = "Louis";
const newAge = "81";
const id = "1";

const userUpdated2 =
  await sql`UPDATE users SET name=${newName}, age=${newAge} WHERE id=${id} RETURNING *`;
// userUpdated2 = [{id: "1", name: "Louis", agre: "81"}];
