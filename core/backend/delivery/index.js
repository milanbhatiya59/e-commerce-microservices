import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json("Delivery Service is running");
});

app.listen(3000, () => {
  console.log("Delivery Service running on port 3000");
});
