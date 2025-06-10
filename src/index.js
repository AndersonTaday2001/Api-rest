import express from "express";
import { createPool } from "mysql2/promise";

import "dotenv/config";

const app = express();

console.log("Conectando a MySQL en:", {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
});

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result[0]);
});

const port = process.env.PORT_SERVER;
app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`);
});
