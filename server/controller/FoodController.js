import ErrorHandler from "../error/errorHandler.js";
import { Reservation } from "../modules/FoodModels.js";

const Send_Reservation = async (req, res, next) => {
  const { FirstName, LastName, date, time, email, phone } = req.body;
  if (!FirstName || !LastName || !date || !time || !email || !phone) {
    return next(
      new ErrorHandler("Please Fill All the reservation details", 400)
    );
  }

  try {
    await Reservation.create({ FirstName, LastName, date, time, email, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(ValidationErrors.join(", "), 400));
    }
    return next(error);
  }
};

export default Send_Reservation;
