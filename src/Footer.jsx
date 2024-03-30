import React from "react";

function Footer() {
  return (
    <div className="flex px-4 bg-black">
      <div className="grid grid-cols-2  w-full p-4 ">
        <div className=" flex text-white text-m col-span-1  place-items-start p-2 ">
        Copyright © 2024 Fashion Lifestyle Blog
        </div>
        <div className="flex gap-7 place-content-end items-center col-span-1 p-3  font-semibold text-sm text-white">
          <span className="">Home</span>
          <span>Blog</span>
          <span>New Arrivals</span>
          <span>Contact</span>
        </div>
       
      </div>
    </div>
  );
}
export default Footer;
