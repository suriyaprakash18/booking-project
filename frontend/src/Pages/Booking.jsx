import React from 'react';
import { useLocation } from 'react-router-dom';
import Buslist from "../components/Buslist";
import Seatselection from '../components/Seatselection';

function Booking() {
  const location = useLocation();
  const { from, to } = location.state || {};

  //  handle empty state
  if (!from || !to) {
    return <h3>Please search buses first</h3>;
  }

  return (
    <div>
      <h2>{from} → {to}</h2>
      <Buslist from={from} to={to} />
     
    </div>
  );
}

export default Booking;