import React from "react";

function Footer() {
  return (
    <div className="flex px-4 bg-black">
      <div className="grid grid-cols-2 sm:flex sm:flex-col w-full p-8 ">
        <div className=" flex  text-white  col-span-1  place-items-start p-1 text-sm md:text-lg lg:text-xl xl:text-2xl ">
        Copyright © 2024 Fashion Lifestyle Blog
        </div>
        <div className="flex gap-7 place-content-end items-center col-span-1 p-3  font-semibold text-sm text-white">
          <span className="cursor-pointer ">Home</span>
          <span className="cursor-pointer ">Blog</span>
          <span className="cursor-pointer ">New Arrivals</span>
          <span className="cursor-pointer ">Contact</span>
        </div>
       
      </div>
    </div>
  );
}
export default Footer;
