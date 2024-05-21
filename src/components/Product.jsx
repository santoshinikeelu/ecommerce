import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col">
      <div className=" grid grid-cols-6 place-items-start  m-[1rem]  bg-purple-200  ">
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200 ">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem] "
              src="/ethnic.png"
              alt="Ethnic "
            />
          </div>
          <div className="items-center text-[1rem]  ">
            <ul>
              <li className=" flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/ethnic">Ethnic Wear</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem] "
              src="/western.png"
              alt="western"
            />
          </div>
          <div className="items-center text-[1rem] ">
            <ul>
              <li className="flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/western">Western Wear</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem]   "
              src="/footware.png"
              alt="grocerry"
            />
          </div>
          <div className="items-center text-[1rem] ">
            <ul>
              <li className="flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/footware">Foot Wear</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem]   "
              src="/accessories.png"
              alt="Accessories"
            />
          </div>
          <div className="items-center text-[1rem] ">
            <ul>
              <li className="flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/accessories">Accessories</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem]  "
              src="/beauty.png"
              alt="grocerry"
            />
          </div>
          <div className="items-center text-[1rem] ">
            <ul>
              <li className="flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/beauty">Beauty & Gromming</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-center rounded-[0.3rem]  h-full w-full bg-purple-200">
          <div>
            <img
              className="h-[17vh] cursor-pointer xl:h-15 m-[2rem]   "
              src="/jewellery.png"
              alt="Jewellery"
            />
          </div>
          <div className="items-center text-[1rem] ">
            <ul>
              <li className="flex cursor-pointer  hover:text-purple-800 mb-[1rem]">
                <Link to="/jewellery">Jewellery</Link>
                <RiArrowDropDownLine size={27} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" items-center m-[1rem] bg-purple-200 h-auto  ">
       <p className="font-extrabold text-[2.5rem] p-[2rem] mx-[20rem]">UP TO 30% OFF DRESSES , TOPS AND MORE! </p>
       <div className="p-4">
       <p className="font-thin text-[1rem] mx-[35rem] ">Limited time only, Selected style marked down on site. </p>
       </div>
      </div>
    </div>
  );
};

export default Product;
