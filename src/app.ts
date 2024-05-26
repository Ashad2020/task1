import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("up and runing!");
});


export default app;