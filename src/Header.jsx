import React from "react";
import { IoReorderThree } from "react-icons/io5";

function Header() {
  return (
    <div className="flex px-4 ">
 <div className="flex justify-between  w-full py-2  ">
       
 
      <div className=" flex font-bold text-2xl col-span-1  place-items-start p-2">
      <img className="max-w-screen-sm cursor-pointer " src="/vite.svg" alt="Image" /> 
      </div>
      <div className="flex  place-content-end items-center col-span-3 p-3  font-semibold text-sm ">
      <IoReorderThree size={30}/>
        {/* <span className="cursor-pointer  hover:text-red-700">Home</span>
        <span className="cursor-pointer  hover:text-red-700" >Blog</span>
        <span className="cursor-pointer  hover:text-red-700">New Arrivals</span>
        <span className="cursor-pointer  hover:text-red-700">Contact</span> */}
      </div>
      {/* <div className="  col-span-1 flex place-content-center items-center p-2 gap-2">
      <span className=" "><img className="h-12 cursor-pointer" src="/pintrest.jpg" alt="pintrest" /></span>
        <span className=" "><img className="h-5 cursor-pointer" src="/insta.jpg" alt="insta" /></span>
        <span className=" "><img className="h-12 cursor-pointer" src="/youtube.jpg" alt="youtube" /></span>
      </div> */}
    
    </div>
    
   </div>
  );
}

export default Header;
2