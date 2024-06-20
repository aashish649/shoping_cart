import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logonav.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <div className="flex items-center h-20 max-w-6xl mx-auto justify-between ">
        <NavLink to="/">
          <div className="ml-5">
            <img src= {logo} className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center mr-5 space-x-6 font-medium text-slate-100"> 
    
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative " >
              <FaShoppingCart className="text-2xl" />
                {
                  cart.length > 0 &&
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white"> {cart.length} </span>
                }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
