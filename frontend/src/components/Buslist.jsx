import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/OIP.bg img 2.webp'
function Buslist({ from, to }) {

  const navigate = useNavigate();

  const buses = [
    { id: 1,img:img,name:"seran express", from: "Coimbatore", to: "salem", price: 800, },
    { id: 2,img:img,name:"navi express",  from: "Coimbatore", to: "Madurai", price: 500 },
    { id: 3,img:img,name:"sms express",  from: "Coimbatore", to: "thiruchi", price: 700 },
    { id: 4,img:img,name:"devil express",  from: "Coimbatore", to: "Chennai", price: 900 },
    { id: 5,img:img,name:"srm express",  from: "Coimbatore", to: "ooty", price: 300 },
    { id: 6,img:img,name:"sat express",  from: "Coimbatore", to: "kanniyakumari", price: 600 },
    { id: 7,img:img,name:"nms express",  from: "Coimbatore", to: "theni", price: 400 },
    { id: 8,img:img,name:"smt express",  from: "Coimbatore", to: "namakkal", price: 650 }


  ];

  const filtered = buses.filter((bus) =>
    bus.from.toLowerCase().trim() === from.toLowerCase().trim() &&
    bus.to.toLowerCase().trim() === to.toLowerCase().trim()
  );


  return (
    <div>
      <h2>Available Buses</h2>

      {filtered.length > 0 ? (
        filtered.map((bus) => (
          <div
            key={bus.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px"
            }}
          >
            <img src={bus.img}   className='busimg '/>
            <h3>name: {bus.name}</h3>

            <h3>{bus.from} → {bus.to}</h3>
            <h3>Price: ₹{bus.price}</h3>
            <button
            onClick={() => (
              navigate("/Seatselction", {state:{bus}})
            )}  
            className='onclick'
            >Select</button>
          </div>
        ))
      ) : (
        <p>No buses available</p>
      )}
    </div>
  );
}

export default Buslist;