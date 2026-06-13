import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { bus, from, to } = location.state || {};

  const seats = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
   
  }));

  const handleSelect = (seat) => {
    if (seat.booked) return;

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };


const handleConfirm = () => {
  if (selectedSeats.length === 0) {
    alert("Please select seats");
    return;
  }

  navigate("/Bookingform", {
    state: { selectedSeats, bus, from, to }
  });
};

  return (
    <div>
      <div style={{paddingTop:"50px",height:"87vh",paddingLeft:"400px",backgroundColor:"rgb(241, 233, 235)"}}>
      <h1>Select Seats ({bus?.name})</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,100px)",
        gap: "30px"
      }}>
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat.id);

          return (
            <button
              key={seat.id}
              onClick={() => handleSelect(seat)}
              style={{
                height: "40px",
                backgroundColor: seat.booked
                  ? "gray"
                  : isSelected
                  ? "green"
                  : "white"
              }}
            >
              {seat.id}
            </button>
          );
        })}
      </div>

      <h3>Seats no: {selectedSeats.join(", ") || ""}</h3>

      <button className="bt" onClick={handleConfirm}>
        Confirm Booking
      </button>
      </div>
    </div>
  );
}

export default SeatSelection;