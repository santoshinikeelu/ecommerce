import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className="flex flex-col rounded-[0.3rem] border-2 h-full w-full bg-purple-200 overflow-hidden">
      <div>
        <ul>
          <li className="cursor-pointer transition ease-in-out delay-50 hover:-translate-y-[1rem] hover:scale-110  duration-50">
            <Link to="/jewellery">
              <img
                className="h-[60vh] mx-auto cursor-pointer xl:h-15 m-2  transition ease-in-out delay-50 hover:-translate-y-[1rem] hover:scale-110  duration-50"
                src={product.src}
                alt="Ethic "
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex justify-start items-start h-full flex-col mx-2 my-2">
        <p className="text-[0.8rem] text-purple-400">{product.sponser}</p>
        <p className="text-[1rem] text-purple-700 mt-1">{product.brandName}</p>
        <p className="text-[1.1rem] text-purple-800 mt-1">{product.name}</p>
        <div className="flex justify-between gap-3 mt-1 text-[1.1rem]  ">
          <p className="text-purple-950">{product.discountPrize}</p>
          <p className="text-purple-500 text-[0.85rem] line-through ">{product.prize}</p>
          <p className="text-green-500 text-[0.9rem]">{product.offer}</p>
        </div>
        <div className=" mt-1  text-purple-900">
          <div className=" w-full h-auto col-span-2 space-x-5">
            {product.sizes.map((curElem, index) => {
              return (
                <span className=" " key={index}>
                  {curElem}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
