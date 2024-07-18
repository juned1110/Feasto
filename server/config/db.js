import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://junedk1110:37F72DHHjaMAtJwR@cluster0.g8lrgdg.mongodb.net/Feasto"
    )
    .then(() => console.log(" DB connected "));
};
