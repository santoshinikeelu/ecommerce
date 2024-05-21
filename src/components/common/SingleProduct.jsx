import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

const SingleProduct = ({}) => {
  const [imgIndex, setImageIndex] = useState(0);
  const [isFilled, setisFilled] = useState(false);

  const image = [
    "https://img.faballey.com/images/Product/IPL00834Z/d3.jpg",
    "https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43_1024x.webp?v=1675162397",
    "https://juniperfashion.com/cdn/shop/files/Untitled_design_5.jpg?v=1704555519&width=1080",
    "https://images-static.nykaa.com/uploads/5b800cb0-e91c-42ed-b529-d3379cb9e355.jpg?tr=w-300,cm-pad_resize",
    "https://www.gochikko.com/cdn/shop/files/0D3A3625-min.jpg?v=1687503956",
  ];
  const Like = () => {
    setisFilled(!isFilled);
  };

  return (
    <div className="h-auto   bg-lime-300">
      <div className="grid grid-cols-2 place-items-start ">
        <div className="">
          
          <img
            className="mx-[15rem] h-auto w-[30vw] my-[2rem] cursor-pointer"
            src={image[imgIndex]}
            alt="single product"
            onClick={() =>
              imgIndex === image.length - 1
                ? setImageIndex(0)
                : setImageIndex(imgIndex + 1)
            }
          />
        </div>
        <div className="my-[4rem]">
          <div className="text-[1.3rem] font-extralight">Klosia</div>
          <div className="font-bold text-[2.3rem]">
            Women Viscose Rayon Kurta
          </div>
          <div className="flex place-items-start gap-3 my-2">
            <div className="flex place-items-start ">
              <CiStar
                size={25}
                className={`cursor-pointer ${
                  isFilled ? "text-blue-500 " : "text-black"
                }`}
                onClick={Like}
              />
              <CiStar
                size={25}
                className={`cursor-pointer ${
                  isFilled ? "text-blue-500 " : "text-black"
                }`}
                onClick={Like}
              />
              <CiStar
                size={25}
                className={`cursor-pointer ${
                  isFilled ? "text-blue-500 " : "text-black"
                }`}
                onClick={Like}
              />
              <CiStar
                size={25}
                className={`cursor-pointer ${
                  isFilled ? "text-blue-500 " : "text-black"
                }`}
                onClick={Like}
              />
              <CiStar
                size={25}
                className={`cursor-pointer ${
                  isFilled ? "text-blue-500 " : "text-black"
                }`}
                onClick={Like}
              />
            </div>
            <div className="text-[1.2rem]">4 Reviews</div>
          </div>
          <div className="flex  gap-6 mt-1 text-[1.1rem]  ">
            <p className="text-[2rem]">₹699</p>
            <p className=" text-[1.5rem] line-through my-1"> ₹2,999</p>
            <p className="text-orange-600 text-[1.5rem] my-1">(Rs.76% off)</p>
          </div>
          <div className="my-2">
            <p className="text-[1rem] font-semibold text-cyan-500">
              inclusive of all taxes
            </p>
          </div>
          <div className="flex  gap-6  ">
            <div>
              <p className=" text-[1.8rem] my-3 ">Color</p>
            </div>
            <div className="flex gap-2">
              <p className=" border-2 border-gray-300 rounded-full w-9 h-9 my-3 bg-rose-900"></p>
              <p className=" border-2 border-gray-300 rounded-full w-9 h-9 my-3 bg-pink-700"></p>
              <p className=" border-2 border-gray-300 rounded-full w-9 h-9 my-3 bg-cyan-700"></p>
            </div>
          </div>
          <div className="flex flex-col     ">
            <div>
              <p className="text-[1.4rem] my-[1.5rem] ">Select Size</p>
            </div>
            <div className="flex gap-5">
              <div className=" border-2 border-pink-900 rounded-full w-20 h-20  text-[1.3rem]">
                <p className="mx-[2.1rem] my-[1.3rem] ">S</p>
              </div>
              <div className=" border-2 border-pink-900 rounded-full w-20 h-20  text-[1.3rem]">
                <p className="mx-[1.9rem] my-[1.3rem] ">M</p>
              </div>
              <div className=" border-2 border-pink-900 rounded-full w-20 h-20  text-[1.3rem]">
                <p className="mx-[2.1rem] my-[1.3rem] ">L</p>
              </div>
              <div className=" border-2 border-pink-900 rounded-full w-20 h-20  text-[1.3rem]">
                <p className="mx-[1.7rem] my-[1.3rem] ">XL</p>
              </div>
              <div className=" border-2 border-pink-900 rounded-full w-20 h-20  text-[1.3rem]">
                <p className="mx-[1.4rem] my-[1.3rem] ">XXL</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-7">
            <div className="flex gap-1 border-2 border-rose-500 rounded-md w-[42vh] h-[9.5vh] bg-rose-500 text-[1.3rem]">
              <HiShoppingBag
                size={40}
                color="white"
                className="ml-[3rem] mt-2"
              />
              <p className=" my-[1rem] text-white text-[1.5rem] ">Add To Bag</p>
            </div>
            <div className="flex gap-1 border-2  border-pink-900 rounded-md w-[28vh] h-[9.5vh]  text-[1.3rem]">
              <button
                className="flex items-center justify-center"
                onClick={Like}
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {isFilled ? (
                  <IoHeart size={35} className="text-red-500 ml-[2rem]  " />
                ) : (
                  <IoHeartOutline
                    size={35}
                    className="text-gray-500 ml-[2rem] "
                  />
                )}
              </button>
              <p className=" my-[1rem] text-pink-900 text-[1.3rem] ">
                WISHLIST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
