import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Restaurant Service is running");
});


app.listen(3000, () => {
  console.log("Restaurant Service running on port 3000");
});
