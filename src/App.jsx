import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

function App() {
  return (
    <div className="flex flex-col gap-0 w-[100vw] border-2 border-red-800">
      <div class=" relative parallax-container grid grid-cols-3 ">
        <div className="col-span-1">
          <h1
            className="text-white/85 
         text-[1.8rem]  md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]  absolute top-12 left-8"
          >
            Let’s Create Your.
          </h1>
          <div
            className="text-white/85 
         text-[2.5rem]  md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] absolute top-[7.5rem] left-[1.5rem] "
          >
            <div className=" flex justify-center items-start flex-col">
              <span> Own Style with </span>
              <span>K.A.R.A.!</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row  lg:flex-row  xl:flex-row  ">
            <button
              class="border-[0.05rem] text-white/85 
         text-[0.95rem]  absolute top-[18rem] left-6 px-[2rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
            >
              <div className=" flex justify-center items-start flex-row gap-3 ">
                <span>
                  {" "}
                  <FaArrowRight size={18} />{" "}
                </span>
                <span>Read More</span>
              </div>
            </button>
            <button
              class=" text-white/85 
         text-[0.95rem]  absolute top-[22.5rem] left-6  md:left-[20rem] lg:left-[20rem] xl:left-[20rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
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
        <div className="pl-7 mt-[4rem] md:mt-[5rem] lg:mt-[5rem] xl:mt-[5rem] text-[1rem] font-light">
          Great Style For Everyone
        </div>
        <div className="pl-7 mt-[0.75rem] md:mt-[0.25rem] lg:mt-[0.25rem] xl:mt-[0.25rem] text-[1.8rem]  md:text-[3rem] lg:text-[3rem] xl:text-[3rem]">
          I Love to Help People Feel Great about How They Look.
        </div>
        <div className="bg-[#C2A09E] h-[52rem] w-full md:h-[30rem] lg:h-[30rem] xl:h-[30rem] mt-[10rem]  md:mt-[8rem] lg:mt-[8rem] xl:mt-[8rem]  ">
          <div className=" "></div>
          <div className="absolute px-[2.5rem] md:left-[4rem] lg:left-[4rem] xl:left-[4rem] top-[20rem]">
            <img
              className=" h-[23rem] md:h-[37rem] lg:h-[37rem] xl:h-[37rem]"
              src="/the-model.jpg"
              alt="Image"
            />
          </div>
          <div
            className="absolute left-[1.3rem] md:left-[38rem] lg:left-[38rem] xl:left-[38rem] top-[44rem] md:top-[30rem] lg:top-[30rem] xl:top-[30rem]  text-white/85 
         text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem]  md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem] "
          >
            Discover Your Personal Style and the Confidence That Comes with It.
          </div>
          <div
            className="absolute left-[1.3rem] md:left-[38rem] lg:left-[38rem] xl:left-[38rem] top-[58rem] md:top-[38rem] lg:top-[38rem] xl:top-[38rem]  text-white/85 
         text-[1rem] md:text-[0.96rem] lg:text-[0.96rem] xl:text-[0.96rem] mr-4 md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem]"
          >
            Tempora aliqua cillum accusamus aperiam pharetra cupidatat fermentum
            viverra delectus quidem incidunt tempus itaque quam, id blandit
            dolores, proin reiciendis. Nostrum proin sem veniam veritatis
            inceptos!
          </div>

          <button
            class="absolute left-[1.3rem] md:left-[38rem] lg:left-[38rem] xl:left-[38rem] top-[70rem] md:top-[58rem] lg:top-[58rem] xl:top-[58rem] border-[0.05rem] text-white/85 
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
      </div>
        <div className=" mt-[5rem]  md:mt-[8rem] lg:mt-[8rem] xl:mt-[8rem]  flex flex-col  items-center">
          <div className="mx-[2rem]">Services for All Age Women</div>
          <div className="text-[1.5rem]  md:text-[2.95rem] lg:text-[2.95rem] xl:text-[2.95rem] mt-6 font-bold mx-[3rem]">
            I Love to Help People Feel Great about How They Look.
          </div>
        </div>
        <div className="relative flex flex-col sm:flex-col md:flex-col lg:flex xl:flex  lg:justify-center gap-7 my-10 h-[80vh] w-[100vw] mx-[2rem]  ">
          <img className="h-[100%] w-[80%]  sm:h-[80%] md:h-[80%] lg:h-[80%] xl:h-[80%] " src="/first.jpg" alt="Image" />
          <img className="h-[100%] w-[80%] sm:h-[90%] md:h-[90%] lg:h-[90%] xl:h-[90%] " src="/model-2.jpg" alt="Image" />
          <img className="h-[100%] w-[80%] " src="/model-3.jpg" alt="Image" />
          <img className="h-[100%] w-[80%] sm:h-[80%] md:h-[80%] lg:h-[80%] xl:h-[80%] " src="/model-4.jpg" alt="Image" />
        </div>
        <div className="relative flex flex-col justify-between items-center lg:grid grid-cols-3 lg:place-items-start gap-5  h-[160vh] lg:h-[40vh] w-[99vw]  mt-[73rem] lg:mt-[5rem] px-3 border-2 border-teal-300">
          <div className="flex flex-col justify-between items-center lg:col-span-1 lg:ml-[4rem]">
            <div className="flex flex-col justify-center items-center lg:flex lg:items-start gap-3">
              <img className="h-[55%] lg:h-[15%]  " src="/01-free-img.png" alt="Image" />
              <div className=" text-black font-semibold text-[2rem] lg:text-[1.75rem]">
                Wardrobe Styling
              </div>
            </div>
            <div className="text-[1rem] lg:text-[1rem] mt-5 px-[2.5rem] lg:ml-[3.5rem] font-thin ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col col-span-1 mx-[2rem]">
            <div className="flex flex-col items-center lg:flex lg:items-start gap-3">
              <img className="h-[55%] lg:h-[15%]  " src="/02.png" alt="Image" />
              <div className=" text-black font-semibold text-[2rem] lg:text-[1.75rem]">
                Closet Cleanse
              </div>
            </div>
            <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col col-span-1 mr-[4rem]">
            <div className="flex flex-col items-center lg:flex lg:items-start gap-3">
              <img className="h-[55%] lg:h-[15%] " src="/03.png" alt="Image" />
              <div className=" text-black font-semibold text-[2rem] lg:text-[1.75rem]">
                Shopping Tour
              </div>
            </div>
            <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
        </div>
        <div className="h-[85vh]  bg-red-50 flex flex-col items-center ">
          <div className="text-black text-[1.5rem] mt-[6rem] underline underline-offset-[1.75rem] decoration-[0.15rem] px-4">
            Testimonials
          </div>
          <div className="text-black text-[3rem] mt-[2rem]  px-4">
            My Happy Clients!
          </div>
          <div className="text-black text-[0.95rem] mt-[2rem] flex flex-col">
            <span className="mx-[10rem]">
              Aliquip quae scipit eros. Anim commodi maiores pharetra, arcu
              incidunt, omnis iste
            </span>{" "}
            <span className="px-[11rem]">
              incidunt cursus. Officia ea numquam vivamus repellen. Minus
              fermentum litora.
            </span>
          </div>
          <div className="text-black text-[0.95rem] mt-[1.5rem] grid grid-cols-2 place-items-center gap-3">
            <span className="">
              <img
                className="rounded-full h-[6rem] w-[6rem]"
                src="/clients01-free-img.jpg"
                alt="Image"
              />
            </span>{" "}
            <span className="ml-[]">Deborah Sims</span>
          </div>
        </div>
        <div className="text-black text-[0.95rem]  grid grid-cols-6 place-items-center gap-5  mt-[5rem] px-8">
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-5.png"
            alt="Image"
          />
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo.png"
            alt="Image"
          />
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-1.png"
            alt="Image"
          />
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-3.png"
            alt="Image"
          />
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-5.png"
            alt="Image"
          />
          <img
            className="h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-4.png"
            alt="Image"
          />
        </div>
        <div className="h-[85vh] relative parallax-container flex flex-col  place-items-start mt-[7rem] gap-4">
        <div className="text-black text-[0.95rem]  grid grid-cols-3 place-items-center gap-5  mt-[5rem] px-8 h-[88vh] ">
          <div className="  bg-[#C2A09E] col-span-1 h-full w-full place-items-start">
            <div className="text-white/85 text-[3rem] mt-[3rem] mx-[2rem]">
              Area of Expertise!
            </div>

            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
              <span>Style</span>
              <span>
                {" "}
                <IoMdArrowDropright size={18} />{" "}
              </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
              <span>Tranding Fashion</span>
              <span>
                {" "}
                <IoMdArrowDropright size={18} />{" "}
              </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
              <span>People & Place</span>
              <span>
                {" "}
                <IoMdArrowDropright size={18} />{" "}
              </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
              <span>Before-After</span>
              <span>
                {" "}
                <IoMdArrowDropright size={18} />{" "}
              </span>
            </div>
          </div>
          <div className=" col-span-1 h-full w-full flex flex-col place-items-start">
            <img
              className="h-[15rem] w-full mr-2 p-4 "
              loading="lazy"
              src="/fashion-shopping.jpg"
              alt="Image"
            />
            <div className="text-[1.5rem] px-5">
              I've Worked with from Big Agencies to New Bloggers.
            </div>
            <div className="text-[0.95rem] px-5 mt-[2rem]  ">
              Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
              voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
            </div>
            <div className="mt-[2rem] px-5">
              <button
                class="  border-[0.05rem] border-red-300 text-red-300
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
          </div>
          <div className=" col-span-1 h-full w-full flex flex-col place-items-start">
            <img
              className="h-[15rem] w-full mr-2 p-4 "
              loading="lazy"
              src="/makeup-kit.jpg"
              alt="Image"
            />
            <div className="text-[1.5rem] px-5">
              I Can Help You Take Your next Step Regardless of Size.
            </div>
            <div className="text-[0.95rem] px-5 mt-[2rem]">
              Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
              voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
            </div>
            <div className="mt-[2rem] px-5">
              <button
                class="  border-[0.05rem] border-red-300 text-red-300
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
          </div>
        </div>
          <div className="text-white/85 text-[1.5rem] underline underline-offset-[1.75rem] decoration-[0.15rem] px-4 top-2">
            Contact Me
          </div>
          <div className="text-white/85 text-[3rem] px-4 ">
            Consultations Are Free!
          </div>
          <div className="text-white/85 text-[0.95rem] ">
            <span className="mx-[10rem]">
              Platea proident! Aute, rerum sociosqu numquam placerat, rerum
              molestias doloribus incidunt occaecati placeat,
            </span>{" "}
            <span className="px-[11rem]">
              repellendus mus optio, totam cons.
            </span>
          </div>
          <div className=" px-[5rem]">
            <button
              class="border-[0.05rem] text-white/85 
         text-[0.92rem]    px-[4rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
            >
              <div className=" flex justify-center items-start flex-row gap-3">
                <span>Let's Get Started</span>
                <span>
                  {" "}
                  <FaArrowRight size={17} />{" "}
                </span>
              </div>
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
