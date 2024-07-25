import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://junedk1110:o5PlmIYlHxJmI2rE@cluster0.fwcjum3.mongodb.net/Feasto"
    )
    .then(() => {
      console.log("DB connected");
    });
};
