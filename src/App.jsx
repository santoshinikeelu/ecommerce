import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

function App() {
  return (
    <div className="flex flex-col gap-0">
      <div class=" relative parallax-container grid grid-cols-3 ">
        <div className="col-span-1">
          <h1
            className="text-white/85 
         text-[2.5rem]  absolute top-8 left-10"
          >
            Let’s Create Your.
          </h1>
          <div
            className="text-white/85 
         text-[4rem] absolute top-[7.5rem] left-10 "
          >
            <div className=" flex justify-center items-start flex-col">
              <span> Own Style with </span>
              <span>K.A.R.A.!</span>
            </div>
          </div>
          <div className="flex flex-row ">
          <button class="border-[0.05rem] text-white/85 
         text-[0.95rem]  absolute top-[22rem] left-10 px-[2rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 ">
          <div className=" flex justify-center items-start flex-row gap-3">
              <span> <FaArrowRight size={18}/> </span>
              <span>Read More</span>
            </div>
          
          </button>
          <button class=" text-white/85 
         text-[0.95rem]  absolute top-[22.5rem] left-[20rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 ">
          <div className=" flex justify-center items-start flex-row gap-3">
              <span> <MdOutlineSlowMotionVideo size={18}/> </span>
              <span>Watch Video</span>
            </div>
         </button>
          </div>
        </div>
      </div>
        <div className=" ">
          <div className="pl-9 mt-[5rem] text-[1rem] font-light">Great Style For Everyone</div>
          <div className="pl-9 mt-[0.25rem] text-[3rem]">I Love to Help People Feel Great <br /> about How They Look.</div>
          <div className="bg-orange-500 relative">
          <img className="h- m-2 ml-6" src="/the-model.jpg" alt="Image" />
          </div>

        </div>
    </div>
  );
}

export default App;
