import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

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
            <span className="mx-[2rem] font-bold">
              I Love to Help People Feel
            </span>{" "}
            <span className="mx-[1rem]">Great about How They Look.</span>{" "}
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-5 my-10 h-[80vh] w-[100vw] ">
          <img className="h-[80%]" src="/first.jpg" alt="Image" />
          <img className="h-[90%]" src="/model-2.jpg" alt="Image" />
          <img className="h-[100%]" src="/model-3.jpg" alt="Image" />
          <img className="h-[80%]" src="/model-4.jpg" alt="Image" />
        </div>
        <div className="relative grid grid-cols-3 place-items-start gap-5  h-[40vh] w-[100vw]  mt-[5rem]">
          <div className="flex flex-col col-span-1 ml-[4rem]">
            <div className="flex items-start gap-3">
              <img className="h-[15%]  " src="/01-free-img.png" alt="Image" />
              <div className=" text-black font-semibold text-[1.75rem]">
                Wardrobe Styling
              </div>
            </div>
            <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col col-span-1 mx-[2rem]">
            <div className="flex items-start gap-3">
              <img className="h-[15%]  " src="/02.png" alt="Image" />
              <div className=" text-black font-semibold text-[1.75rem]">
                Closet Cleanse
              </div>
            </div>
            <div className="text-[1rem] mt-5 ml-[3.5rem] font-thin ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col col-span-1 mr-[4rem]">
            <div className="flex items-start gap-3">
              <img className="h-[15%]  " src="/03.png" alt="Image" />
              <div className=" text-black font-semibold text-[1.75rem]">
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
        <div className="text-black text-[0.95rem]  grid grid-cols-3 place-items-center gap-5  mt-[5rem] px-8 h-[88vh] ">
          <div className="  bg-[#C2A09E] col-span-1 h-full w-full place-items-start">
            <div className="text-white/85 text-[3rem] mt-[3rem] mx-[2rem]">
              Area of Expertise!
            </div>
            <div className="grid grid-cols-1 divide-y">

            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start">
                <span>Style</span>
            <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start">
                <span>Tranding Fashion</span>
            <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start">
                <span>People & Place</span>
            <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
            </div>
            <div className="text-black text-[1rem] mt-[2rem] mx-[2rem] font-bold  flex justify-between items-start">
                <span>Before-After</span>
            <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
            </div>
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
        <div className="h-[85vh] relative parallax-container flex flex-col  place-items-start mt-[7rem] gap-4">
          <div className="text-white/85 text-[1.5rem] underline underline-offset-[1.75rem] decoration-[0.15rem] px-4 top-2">
            Contact Me
          </div>
          <div className="text-white/85 text-[3rem] px-4 ">
          Consultations Are Free!
          </div>
          <div className="text-white/85 text-[0.95rem] ">
            <span className="mx-[10rem]">
            Platea proident! Aute, rerum sociosqu numquam placerat, rerum molestias doloribus incidunt occaecati placeat,
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
    </div>
  );
}

export default App;
