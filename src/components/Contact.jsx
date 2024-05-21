import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {
  return (
    <div> <div className="h-[130vh] relative parallax-container flex flex-col justify-center items-center mt-[26rem] sm:mt-[27rem] md:mt-[12rem] lg:mt-[0.1rem]">
    <div className="text-white/85 text-[0.8rem]  lg:text-[1.5rem] underline underline-offset-[1.5rem] lg:underline-offset-[1.75rem] decoration-[0.07rem] lg:decoration-[0.15rem] px-4 mt-[0.25rem] lg:top-2">
      Contact Me
    </div>
    <div className="text-white/85 text-[1.6rem] lg:text-[3rem] px-4 mt-[] ">
      Consultations Are Free!
    </div>
    <div className="text-white/85 text-[0.95rem] xl:text-[1.2rem] ">
      <span className=" lg:mx-[5rem] xl:mx-[10rem]">
        Platea proident! Aute, rerum sociosqu numquam placerat, rerum
        molestias doloribus incidunt occaecati placeat,
      </span>{" "}
      <span className="lg:px-[11rem] ">
        repellendus mus optio, totam cons.
      </span>
    </div>
    <div className="px-2 lg:px-[5rem]">
      <button
        class="border-[0.05rem] text-white/85 
 text-[0.92rem]    px-[1rem] md:px-[4rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
      >
        <div className=" flex justify-center items-start flex-row gap-3">
          <span className="xl:text-[1rem]">Let's Get Started</span>
          <span>
            {" "}
            <FaArrowRight size={17} />{" "}
          </span>
        </div>
      </button>
    </div>
  </div></div>
  )
}

export default Contact