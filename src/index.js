import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const port = process.env.PORT_SERVER;
app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`);
});
