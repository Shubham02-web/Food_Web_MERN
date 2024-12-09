import express from "express";
import Send_Reservation from "../controller/FoodController.js";
const router = express.Router();

router.post("/send", Send_Reservation);

export default router;
