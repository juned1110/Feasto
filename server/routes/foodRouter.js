import express from "express";
import { addFood } from "../controllers/FoodController";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood); //endpoint

export default foodRouter;
