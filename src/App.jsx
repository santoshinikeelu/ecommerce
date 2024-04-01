import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

function App() {
  return (
    <div className="flex flex-col gap-0 w-[100vw]">
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
            <button
              class="border-[0.05rem] text-white/85 
         text-[0.95rem]  absolute top-[22rem] left-10 px-[2rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
            >
              <div className=" flex justify-center items-start flex-row gap-3">
                <span>
                  {" "}
                  <FaArrowRight size={18} />{" "}
                </span>
                <span>Read More</span>
              </div>
            </button>
            <button
              class=" text-white/85 
         text-[0.95rem]  absolute top-[22.5rem] left-[20rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
            >
              <div className=" flex justify-center items-start flex-row gap-3">
                <span>
                  {" "}
                  <MdOutlineSlowMotionVideo size={18} />{" "}
                </span>
                <span>Watch Video</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="  relative  ">
        <div className="pl-9 mt-[5rem] text-[1rem] font-light">
          Great Style For Everyone
        </div>
        <div className="pl-9 mt-[0.25rem] text-[3rem]">
          I Love to Help People Feel Great <br /> about How They Look.
        </div>
        <div className="bg-[#C2A09E] h-[30rem] mt-[8rem] ">
          <div className=" "></div>
          <div className="absolute left-[4rem] top-[20rem]">
            <img className=" h-[37rem]" src="/the-model.jpg" alt="Image" />
          </div>
          <div
            className="absolute left-[38rem] top-[30rem]  text-white/85 
         text-[2rem] mr-[6rem]"
          >
            Discover Your Personal Style and the Confidence That Comes with It.
          </div>
          <div
            className="absolute left-[38rem] top-[38rem]  text-white/85 
         text-[0.96rem] mr-[6rem]"
          >
            Tempora aliqua cillum accusamus aperiam pharetra cupidatat fermentum
            viverra delectus quidem incidunt tempus itaque quam, id blandit
            dolores, proin reiciendis. Nostrum proin sem veniam veritatis
            inceptos!
          </div>

          <button
            class="absolute left-[38rem] top-[46rem] border-[0.05rem] text-white/85 
         text-[0.95rem]  px-[2rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
          >
            <div className=" flex justify-center items-start flex-row gap-3">
              <span>
                {" "}
                <FaArrowRight size={18} />{" "}
              </span>
              <span>Read More</span>
            </div>
          </button>
        </div>
        <div className=" mt-[8rem] flex flex-col  items-center">
          <div className="mx-[3rem]">Services for All Age Women</div>
          <div className="text-[2.95rem] flex flex-col ">
            <span className="mx-[2rem]">I Love to Help People Feel</span>{" "}
            <span className="mx-[1rem]">Great about How They Look.</span>{" "}
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-5 my-10 h-[80vh] w-[100vw] ">
          <img className="h-[80%]" src="/first.jpg" alt="Image" />
          <img className="h-[90%]" src="/model-2.jpg" alt="Image" />
          <img className="h-[100%]" src="/model-3.jpg" alt="Image" />
          <img className="h-[80%]" src="/model-4.jpg" alt="Image" />
        </div>
        <div className="relative grid grid-cols-3 place-items-start gap-5  h-[40vh] w-[100vw]  mx-[4rem]">
          <div className="flex flex-col">
         <div className="flex items-start gap-3">
         <img className="h-[15%]  " src="/01-free-img.png" alt="Image" />
         <div className=" text-black font-semibold text-[1.75rem]">
         Wardrobe Styling
         </div>
         </div>
         <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
         Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus
         </div>

          </div>
          <div className="flex flex-col">
         <div className="flex items-start gap-3">
         <img className="h-[15%]  " src="/02.png" alt="Image" />
         <div className=" text-black font-semibold text-[1.75rem]">
         
Closet Cleanse
         </div>
         </div>
         <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
         Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus
         </div>

          </div>
          <div className="flex flex-col">
         <div className="flex items-start gap-3">
         
         <img className="h-[15%]  " src="/03.png" alt="Image" />
         <div className=" text-black font-semibold text-[1.75rem]">
         Shopping Tour
         </div>
         </div>
         <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
         Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus
         </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
