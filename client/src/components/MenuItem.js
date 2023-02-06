import React from "react";

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
