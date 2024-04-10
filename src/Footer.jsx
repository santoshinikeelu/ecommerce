import React from "react";

function Footer() {
  return (
    <div className="flex  px-6 lg:px-4 bg-black">
      <div className=" flex flex-col lg:grid lg:grid-cols-2 sm:flex sm:flex-col w-full p-3 lg:p-8 ">
        <div className=" flex  text-white  col-span-1 place-items-center lg:place-items-start mx-[1remrem]  p-1 text-sm md:text-lg lg:text-xl xl:text-2xl ">
          Copyright © 2024 Fashion Lifestyle Blog
        </div>
        <div className="flex gap-7 place-items-center lg:place-content-end items-center col-span-1 px-12 p-2 lg:p-3  font-semibold text-sm text-white">
          <span className="cursor-pointer ">Home</span>
          <span className="cursor-pointer ">Blog</span>
          <span className="cursor-pointer ">Contact</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
