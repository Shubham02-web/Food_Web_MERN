import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/FoodRoute.js";
import { DBConnection } from "./dbConnection/ConnectmongoDB.js";
import { ErrorMiddleWare } from "./error/errorHandler.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/restaurent", router);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Working with / route",
  });
});
DBConnection();
app.use(ErrorMiddleWare);
export default app;
