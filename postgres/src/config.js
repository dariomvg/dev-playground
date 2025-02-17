import postgres from "postgres";

const host = process.env.HOST_ACESS;
const password = process.env.PASSWORD_ACESS;
const database = process.env.DATABASE_ACESS;
const port = process.env.PORT_ACESS;
const username = process.env.USERNAME_ACESS;

export const sql = postgres(
  `postgres://${username}:${password}@${host}:${port}/${database}`,
  {
    host,
    password,
    database,
    port,
    username,
  }
);
