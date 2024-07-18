import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config//
const app = express();
const port = 4000;

//middleware//
app.use(express.json());
app.use(cors());

//DB connection//
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// mongodb+srv://junedk1110:37F72DHHjaMAtJwR@cluster0.g8lrgdg.mongodb.net/?

// mongodb+srv://junedk1110:37F72DHHjaMAtJwR@cluster0.g8lrgdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
