import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Blog = () => {
  return <div><div className="bg-[#C2A09E] h-[100vh] sm:h-[80vh] w-full md:h-[50vh] lg:h-[60vh] xl:h-[100vh] mt-[8rem]  md:mt-[3rem] lg:mt-[5rem] xl:mt-[1rem]  ">
  <div className=" "></div>
  <div className="absolute  mx-[4rem] sm:mx-[10rem] md:mx-[1rem] lg:mx-[2rem]  xl:mx-[3rem] top-[16rem] md:top-[19.5rem] lg:top-[16.9rem] xl:top-[13rem] ">
    <img
      className=" h-[45vh] w-[65vw] sm:h-[45vh] sm:w-[55vw] md:h-[40vh] md:w-[30vw] lg:h-[70vh] lg:w-[40vw] xl:h-[80vh] xl:w-[25vw]  "
      src="/the-model.jpg"
      alt="Image"
    />
  </div>
  <div
    className="absolute px-[1rem] md:left-[20rem] lg:left-[29rem] xl:left-[30rem] top-[42rem] sm:top-[40rem] md:top-[21rem] lg:top-[22rem] xl:top-[22rem]  text-white/85 
text-[2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2.5rem]  md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem] "
  >
    Discover Your Personal Style and the Confidence That Comes with It.
  </div>
  <div
    className="absolute px-[1rem] md:left-[20rem] lg:left-[29rem] xl:left-[30rem] top-[55rem] sm:top-[47rem] md:top-[27rem] lg:top-[31rem] xl:top-[30rem]  text-white/85 
text-[1rem] md:text-[0.8rem] lg:text-[0.96rem] xl:text-[1.2rem] mr-4 md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem]"
  >
    Tempora aliqua cillum accusamus aperiam pharetra cupidatat fermentum
    viverra delectus quidem incidunt tempus itaque quam, id blandit
    dolores, proin reiciendis. Nostrum proin sem veniam veritatis
    inceptos!
  </div>

  <button
    class="absolute left-[1rem] md:left-[21rem] lg:left-[30rem] xl:left-[31rem] top-[66rem] sm:top-[53rem] md:top-[34rem] lg:top-[40rem] xl:top-[38.5rem] border-[0.05rem] text-white/85 
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
</div></div>;
};

export default Blog;
