import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
   res.status(201).json("Menu Service is running");
});

app.listen(3000, () => {
  console.log("Menu Service running on port 3000");
});
