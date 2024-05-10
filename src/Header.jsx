import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";


function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click)
  }


  // const content = (
  //   <div className={`lg:hidden flex flex-col items-center  p-3 font-semibold text-sm ${click ? 'block' : 'hidden'}`}>
  //   <nav className="flex items-center  p-3 font-semibold text-sm">
  //     <ul className="flex flex-col justify-between gap-4 items-center  p-3 font-semibold text-sm">
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Home</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Blog</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">New Arrivals</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Contact</li>
  //     </ul>
  //   </nav>
    
  // </div>
  // );

  return (
    <div className="flex px-4  ">
      <div className="flex justify-between  w-full py-2  ">
        <div className=" flex font-bold text-2xl col-span-1  place-items-center p-2">
          <img
            className="max-w-screen-sm cursor-pointer xl:h-[13vh]  "
            src="/vite.svg"
            alt="Image"
          />
        </div>
        <div className="hidden lg:flex  place-content-end items-center col-span-3 p-3  font-semibold text-sm ">
          <nav className=" flex place-content-end items-center col-span-3 p-3  font-semibold text-sm ">
            <ul className="flex  gap-8 place-content-end items-center col-span-3 p-3  font-semibold text-sm xl:text-[1rem]  ">
              <li className="cursor-pointer  hover:text-red-700">Home</li>

              <li className="cursor-pointer  hover:text-red-700">Blog</li>

              <li className="cursor-pointer  hover:text-red-700">
                New Arrivals
              </li>

              <li className="cursor-pointer  hover:text-red-700">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="  col-span-1 hidden lg:flex  place-content-center items-center p-2 gap-2">
          <span className=" ">
            <img
              className="h-12 cursor-pointer "
              src="/pintrest.jpg"
              alt="pintrest"
            />
          </span>
          <span className=" ">
            <img className="h-5 cursor-pointer xl:h-7 " src="/insta.jpg" alt="insta" />
          </span>
          <span className=" ">
            <img 
              className="h-12 cursor-pointer xl:h-15 "
              src="/youtube.jpg"
              alt="youtube"
            />
          </span>
        </div>
        {/* <div>
         <div>{content}</div>
        <button className=" block flex justify-center items-center lg:hidden border-2 border-pink-700 " onClick={handleClick}>
      { click ? <ImCross size={20} />: <IoReorderThree size={30} />}
        </button >
        </div> */}
        <div className="  flex justify-center items-center lg:hidden ">
          <IoReorderThree size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
