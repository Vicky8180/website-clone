import React from "react";
import "./Navbar.css";

const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="navbar_left">
        
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"   width="75" 
     height="20" />
        <input
          className="navbar_left_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className="navbar_right">
        <p>Name</p>
        <p>Become a seller</p>
        <p>More</p>
        <p>Cart</p>
      </div>
    </div>
  );
};
export default Navbar;