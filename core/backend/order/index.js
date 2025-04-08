import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json("Order Service is running");
});

app.listen(3000, () => {
  console.log("Order Service running on port 3000");
});
