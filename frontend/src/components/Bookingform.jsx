
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./no1.css";

function Bookingform() {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedSeats, bus, from, to } = location.state || {};

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const totalPrice = (selectedSeats?.length || 0) * (bus?.price || 0);

  const handleBooking = async () => {
    if (!name || !phone) {
      alert("Please enter all details");
      return;
    }

    const bookingData = {
      name,
      phone,
      from,
      to,
      bus: bus?.name,
      seats: selectedSeats,
      total: totalPrice,
    };

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking Confirmed 🎉");
        navigate("/");
      } else {
        alert(data.message || "Booking Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="bg3" style={{ padding: "40px" }}>
      <h1 style={{ paddingTop: "50px", color: "white" }}>
        TICKET BOOKING
      </h1>

      <div className="ticket">
        <h2 style={{ textAlign: "center", color: "red" }}>TICKET</h2>

        <h3><b>From:</b> {bus?.from}</h3>
        <h3><b>To:</b> {bus?.to}</h3>
        <h3><b>Bus:</b> {bus?.name}</h3>
        <h3><b>Seats:</b> {selectedSeats?.join(", ")}</h3>

        <h3>Price per seat: ₹{bus?.price}</h3>
        <h3>Total seats: {selectedSeats?.length}</h3>
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      <div className="per">
        <h2 style={{ paddingTop: "5px" }}>Enter Details</h2>

        <input
          className="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          className="name"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="con" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Bookingform;