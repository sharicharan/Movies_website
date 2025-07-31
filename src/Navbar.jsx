import React from "react";
import logo from "./logonav.png";
import { Link } from "react-router-dom";
import logo1 from "./movielogo.jpg"
import image from "./LOGO.jpeg"
export const Navbar = () => {
  return (
    <>
      <nav className="flex space-x-8 items-center p-5 border-[2px]">
        <img className="w-[100px] h-[40px] " src={image} alt="" />
        <Link to="/" className="text-blue-400 text-[30px] rounded-[10px] border-y p-[5px] font-bold"> Home</Link>
        <Link to="/whach" className="text-blue-400 text-[30px] rounded-[10px] border-y p-[5px] font-bold">Saved</Link>
      </nav>
    </>
  );
};
