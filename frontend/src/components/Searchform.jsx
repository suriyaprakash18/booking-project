import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import './no1.css'

function Searchform() {
    const [from,setfrom] =useState("");
    const [to,setto] = useState("")
    const navigate =useNavigate();

    const handlesubmit=()=>{
        navigate("/booking",{
            state: {from,to}
        });
    };
  return (
    <div className='col' >
    {/* <div className='col1' style={{marginTop:"" }}> */}
    <div style={{}}>
       <div className='col1'>
        <label htmlFor=""><h3>From</h3></label> 
      <input style={{height:"20px",width:"200px",marginTop:"-30"}}  placeholder='from' onChange={(e)=> setfrom(e.target.value)}  />
      <br /> 
     <label><h3>To</h3></label>
      <input style={{height:"20px",width:"200px",marginTop:""}} placeholder='to' onChange={(e)=> setto(e.target.value)} />
 <br /> <br />
<div>
<label htmlFor=""><h3>Date</h3></label>
<input style={{height:"25px",width:"150px",marginTop:"0px"}} type="date"  />  <br />
</div> <br /> <br />
      <button style={{height:"30px",width:"100px",borderRadius:"10px"}} onClick={handlesubmit}>search</button>
</div>
    </div>
    </div>
  )
}

export default Searchform
