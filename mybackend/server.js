const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://suryarajan883_db_user:suriya123@cluster0.ps9dirv.mongodb.net/busbooking")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  from: String,
  to: String,
  bus: String,
  seats: [String],
  total: Number
});

const Booking = mongoose.model("Booking", BookingSchema);

app.post("/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      message: "Booking saved successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving booking"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});