import mongoose from "mongoose";
import validator from "validator";
const ReservationSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Content atleast 3 character"],
    maxLength: [20, "First Name Content less then 20 charcter"],
  },
  LastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Content atleast 3 character"],
    maxLength: [20, "Last Name Content less then 20 charcter"],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "mobileNumber Must Content 10 digit"],
    maxLength: [10, "mobileNumber Must Content 10 digit"],
  },
});

export const Reservation = mongoose.model("Reservation", ReservationSchema);
