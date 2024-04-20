import React from "react";

function Footer() {
  return (
    <div className="flex  px-6 lg:px-4 bg-black">
      <div className=" flex flex-col lg:grid lg:grid-cols-2 lg:place-items-start sm:flex sm:flex-col w-full py-3 lg:py-8  ">
        <div className=" flex  text-white  col-span-1 place-items-center  mx-auto  p-1 text-[0.85rem] md:text-lg lg:text-xl xl:text-2xl  lg:m-2">
          Copyright © 2024 Fashion Lifestyle Blog
        </div>
        <div className="flex gap-7 place-items-center lg:place-content-end items-center col-span-1 mx-auto p-2 lg:mr-2 lg:my-2  font-semibold text-sm text-white  ">
          <span className="cursor-pointer ">Home</span>
          <span className="cursor-pointer ">Blog</span>
          <span className="cursor-pointer ">Contact</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
