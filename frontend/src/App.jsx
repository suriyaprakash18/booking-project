import React from 'react'
import Home from './Pages/Home'
import {  BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Booking from './Pages/Booking';
import SeatSelection from './components/Seatselection';
import Bookingform from './components/Bookingform';
import './App.css'
function App() {
  return (
   
   
     <BrowserRouter>
     
        <div style={{width:"100%",height:"10vh",backgroundColor:"rgb(123, 123, 226)",top:"0",
        margin:"0",padding:"0",zIndex:"1000px",position:"fixed",display:"flex"
        }}>
        <h2>Ticket Booking</h2>
        <div style={{paddingLeft:"1000px",paddingTop:"5px"}}>
        <Link className='home' to="/"><h3>Home</h3></Link>
        </div>
         </div>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Seatselction' element={<SeatSelection/>}/>
      <Route path='/Bookingform' element={<Bookingform/>}/>


     </Routes>
     </BrowserRouter>
   
  );
}

export default App
