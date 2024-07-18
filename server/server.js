import express from "express";
import cors from "cors";

//app config//
const app = express();
const port = 4000;

//middleware//
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
