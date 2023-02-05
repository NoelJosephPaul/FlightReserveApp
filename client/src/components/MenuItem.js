//import { MenuList } from "@mui/material";
//import { MenuList } from "@mui/material";
import React from "react";
//import { Link } from "react-router-dom";


function MenuItem({ image, name, price }) { 
  console.log(name);
  return (
    
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;
/*
<Link to={{
        pathname:"/Booking",
        state: MenuList
      }}>
      
      <button onClick={"Booking()"}>BOOK</button>
      </Link>
      <script src="Booking.js"></script>
      */