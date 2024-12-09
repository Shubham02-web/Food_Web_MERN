import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const DBConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Restaurent",
    })
    .then(() => {
      console.log("Connected to DataBase");
    })
    .catch((e) => {
      console.log(e.message);
      console.log("Error while connecting to database");
    });
};
