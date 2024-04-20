import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

function App() {
  return (
    <>
      <div className="flex flex-col gap-0  w-full border-2 border-pink-800  ">
        <div class=" relative parallax-container grid grid-cols-3 ">
          <div className="col-span-1">
            <h1
              className="text-white/85 
         text-[1.2rem]  md:text-[2rem] lg:text-[2rem] xl:text-[2.5rem]  absolute top-12 left-[1.15rem] md:left-[2rem]"
            >
              Let’s Create Your.
            </h1>
            <div
              className="text-white/85 
         text-[2rem]  md:text-[3rem] lg:text-[3rem] xl:text-[4rem] absolute top-[5.5rem] md:top-[7rem] left-[1.15rem] md:left-[2rem]"
            >
              <div className=" flex justify-center items-start flex-col">
                <span> Own Style with </span>
                <span>K.A.R.A.!</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row  lg:flex-row  xl:flex-row  ">
              <button
                class="border-[0.05rem] text-white/85 
         text-[0.95rem]  absolute top-[13rem]  md:top-[18rem] lg:top-[21rem] left-[1.15rem] md:left-[2rem] px-[2rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
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
         text-[0.95rem]  absolute top-[17rem] md:top-[18.5rem] lg:top-[21.5rem] left-[1.15rem]  md:left-[20rem] lg:left-[20rem] xl:left-[20rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
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
          <div className="flex px-[1.5rem] items-start mt-[4rem] md:mt-[4rem] lg:mt-[3rem] xl:mt-[5rem] text-[1rem] md:text-[1.3rem] lg:text-[2rem] font-light ">
            Great Style For Everyone
          </div>
          <div className="px-[1.5rem]  mt-[0.75rem] md:mt-[0.75rem] lg:mt-[0.25rem] xl:mt-[0.25rem] text-[1.8rem]  md:text-[2.4rem] lg:text-[2.7rem] xl:text-[3.3rem] ">
            I Love to Help People Feel Great about How They Look.
          </div>
          <div className="bg-[#C2A09E] h-[52rem] w-full md:h-[30rem] lg:h-[30rem] xl:h-[30rem] mt-[10rem]  md:mt-[3rem] lg:mt-[5rem] xl:mt-[8rem]  ">
            <div className=" "></div>
            <div className="absolute px-[2.5rem] md:left-[1rem] lg:left-[4rem] xl:left-[4rem] top-[20rem] md:top-[19.5rem] lg:top-[16.3rem] ">
              <img
                className=" h-[23rem] md:h-[25rem] lg:h-[34rem] xl:h-[37rem]"
                src="/the-model.jpg"
                alt="Image"
              />
            </div>
            <div
              className="absolute px-[1rem] md:left-[22rem] lg:left-[32rem] xl:left-[38rem] top-[44rem] md:top-[25rem] lg:top-[22rem] xl:top-[30rem]  text-white/85 
         text-[2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem]  md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem] "
            >
              Discover Your Personal Style and the Confidence That Comes with
              It.
            </div>
            <div
              className="absolute px-[1rem] md:left-[22rem] lg:left-[32rem] xl:left-[38rem] top-[59.5rem] md:top-[33rem] lg:top-[31rem] xl:top-[38rem]  text-white/85 
         text-[1rem] md:text-[0.8rem] lg:text-[0.96rem] xl:text-[0.96rem] mr-4 md:mr-[6rem] lg:mr-[6rem] xl:mr-[6rem]"
            >
              Tempora aliqua cillum accusamus aperiam pharetra cupidatat
              fermentum viverra delectus quidem incidunt tempus itaque quam, id
              blandit dolores, proin reiciendis. Nostrum proin sem veniam
              veritatis inceptos!
            </div>

            <button
              class="absolute left-[1rem] md:left-[23rem] lg:left-[33rem] xl:left-[38rem] top-[72rem] md:top-[42rem] lg:top-[40rem] xl:top-[58rem] border-[0.05rem] text-white/85 
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
        <div className=" mt-[4rem]  md:mt-[3rem] lg:mt-[5rem]  flex flex-col  ">
          <div className="mx-[2rem] md:flex justify-center items-center ">
            Services for All Age Women
          </div>
          <div className="text-[1.5rem]  md:text-[2rem] lg:text-[2.95rem] mt-4 md:mt-2 font-bold mx-[2rem] md:mx-[5rem]   ">
            I Love to Help People Feel Great about How They Look.
          </div>
        </div>
        <div className="relative flex flex-col w-[79vw] mx-auto sm:w-[85vw] sm:flex-col md:flex-row lg:grid lg:grid-cols-4 lg:place-items-center items-center  lg:gap-1 gap-7  my-auto md:my-5 h-[80vh] lg:h-[100vh] lg:w-[94vw] lg:my-7 ">
          <img
            className=" sm:h-[80%] md:h-[80%] md:w-[20%] lg:h-[80%] lg:w-[80%] xl:h-[80%] "
            src="/first.jpg"
            alt="Image"
          />
          <img
            className=" sm:h-[90%] md:h-[90%] md:w-[20%]  lg:h-[95%] lg:w-[80%] xl:h-[90%] "
            src="/model-2.jpg"
            alt="Image"
          />
          <img
            className=" md:h-[100%] md:w-[23%] lg:h-[80%] lg:w-[80%] "
            src="/model-3.jpg"
            alt="Image"
          />
          <img
            className=" sm:h-[80%] md:h-[90%] md:w-[25%]   lg:h-[90%] lg:w-[80%] xl:h-[80%] "
            src="/model-4.jpg"
            alt="Image"
          />
        </div>
        <div className="relative flex flex-col justify-between items-center md:grid grid-cols-3 md:place-items-start lg:grid  lg:place-items-center h-[142vh] md:h-[70vh] lg:h-[50vh] w-full  mt-[88rem] md:mt-[2rem] lg:mt-[3rem] mx-auto ">
          <div className="flex flex-col justify-center items-center lg:col-span-1  ">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center  gap-2 mx-auto">
              <img
                className="h-[55%] lg:h-[15%]  "
                src="/01-free-img.png"
                alt="Image"
              />
              <div className=" text-black font-semibold text-[2rem] md:text-[1.5rem]">
                Wardrobe Styling
              </div>
            </div>
            <div className="text-[1rem]  md:text-[0.85rem] lg:text-[0.9rem] mt-3 pl-[1rem]  font-thin lg:flex lg:justify-center lg:pl-[2rem] mx-auto  text-pretty ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col justify-between items-center  lg:col-span-1  ">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start gap-3 lg:mx-auto">
              <img className="h-[55%] lg:h-[15%]  " src="/02.png" alt="Image" />
              <div className=" text-black font-semibold text-[2rem]  md:text-[1.5rem] ">
                Closet Cleanse
              </div>
            </div>
            <div className="text-[1rem] md:text-[0.85rem] lg:text-[0.9rem] mt-3 pl-[1rem]  font-thin lg:flex lg:justify-center text-pretty  lg:pl-[2rem]  ">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
          <div className="flex flex-col justify-between items-center lg:col-span-1  ">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start gap-3 mx-auto">
              <img className="h-[55%] lg:h-[15%] " src="/03.png" alt="Image" />
              <div className=" text-black font-semibold text-[2rem]  md:text-[1.5rem]">
                Shopping Tour
              </div>
            </div>
            <div className="text-[1rem] md:text-[0.85rem] lg:text-[0.9rem] mt-3 pl-[1rem] lg:flex lg:justify-center font-thin lg:pl-[2rem]">
              Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat
              temporibus
            </div>
          </div>
        </div>
        <div className="h-[173vh] md:h-[140vh]  bg-red-50 flex flex-col items-center mt-[10rem] md:mt-[1rem] ] ">
          <div className="text-black text-[1rem] lg:text-[1.5rem] mt-[3rem] underline underline-offset-[1.05rem] lg:underline-offset-[1.75rem] decoration-[0.1rem] lg:decoration-[0.15rem] px-4">
            Testimonials
          </div>
          <div className="text-black text-[2rem] lg:text-[3rem] mt-[2rem]  px-4">
            My Happy Clients!
          </div>
          <div className="text-black text-[0.95rem] mt-[2rem] flex flex-col">
            <span className=" px-[3rem] lg:mx-[10rem] ">
              Aliquip quae scipit eros. Anim commodi maiores pharetra, arcu
              incidunt, omnis iste
            </span>{" "}
            <span className="px-[3rem] lg:px-[11rem] ">
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
        <div className="text-black text-[0.95rem]  grid grid-cols-2 lg:grid-cols-6 place-items-center gap-7 lg:gap-5  mt-[3rem] px-8">
          <img
            className=" h-[2.95rem] w-[10rem] mr-2 "
            loading="lazy"
            src="/logo-5.png"
            alt="Image"
          />
          <img
            className=" h-[2.95rem] w-[10rem] mr-2 "
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
        <div className="">
          <div className="text-black text-[0.95rem] md:grid md:grid-cols-4  lg:grid lg:grid-cols-3 place-items-center gap-5 mt-[2rem] lg:mt-[4rem] px-5 lg:px-8 h-[165vh] md:h-[200vh]  border-2 border-red-800">
            <div className="  bg-[#C2A09E] md:col-span-4 lg:col-span-1 h-full w-full  place-items-start border-2 border-sky-800">
              <div className="text-white/85 text-[3rem]  mt-[3rem] md:mt-[1rem] mx-[2rem]">
                Area of Expertise!
              </div>

              <div className="text-black text-[1rem] mt-[2rem] md:mt-[1rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
                <span>Style</span>
                <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
              </div>
              <div className="text-black text-[1rem] mt-[2rem] md:mt-[1rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
                <span>Tranding Fashion</span>
                <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
              </div>
              <div className="text-black text-[1rem] mt-[2rem] md:mt-[1rem] mx-[2rem] font-bold  flex justify-between items-start border-b-[0.05rem] border-white/40 py-[0.5rem]">
                <span>People & Place</span>
                <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
              </div>
              <div className="text-black text-[1rem] mt-[2rem] md:mt-[1rem] mx-[2rem] font-bold  flex justify-between items-start  py-[0.5rem]">
                <span>Before-After</span>
                <span>
                  {" "}
                  <IoMdArrowDropright size={18} />{" "}
                </span>
              </div>
            </div>
            <div className=" col-span-1 md:col-span-2 lg:col-span-1 h-[200vh] md:h-[200vh] w-full flex flex-col  place-items-start">
              <img
                className="lg:h-[15rem] w-full mr-2 px-[0.05rem] pt-[4rem] md:pt-1 lg:p-4 "
                loading="lazy"
                src="/fashion-shopping.jpg"
                alt="Image"
              />
              <div className="text-[1.5rem] px-1 pt-2 lg:px-5">
                I've Worked with from Big Agencies to New Bloggers.
              </div>
              <div className="text-[0.95rem] px-2 lg:px-5 mt-4 lg:mt-[2rem]  ">
                Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
                voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
              </div>
              <div className="mt-[2rem] px-2 lg:px-5">
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
            <div className=" col-span-1 md:col-span-2 lg:col-span-1  h-[130vh] md:h-[200vh] w-full flex flex-col place-items-start">
              <img
                className="lg:h-[15rem]  w-full mr-2 px-[0.05rem] md:pt-1 lg:p-4"
                loading="lazy"
                src="/makeup-kit.jpg"
                alt="Image"
              />
              <div className="text-[1.5rem] px-1 pt-2 lg:px-5">
                I Can Help You Take Your next Step Regardless of Size.
              </div>
              <div className="text-[0.95rem] px-2 lg:px-5 mt-4 lg:mt-[2rem] ">
                Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
                voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
              </div>
              <div className="mt-[2rem] px-2 lg:px-5">
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
        </div>
        <div className="h-[180vh] relative parallax-container flex flex-col justify-center items-center mt-[66rem] md:mt-[22rem] lg:mt-[3rem] ">
          <div className="text-white/85 text-[0.8rem]  lg:text-[1.5rem] underline underline-offset-[1.5rem] lg:underline-offset-[1.75rem] decoration-[0.07rem] lg:decoration-[0.15rem] px-4 mt-[0.25rem] lg:top-2">
            Contact Me
          </div>
          <div className="text-white/85 text-[1.6rem] lg:text-[3rem] px-4 mt-[] ">
            Consultations Are Free!
          </div>
          <div className="text-white/85 text-[0.95rem]  ">
            <span className=" lg:mx-[5rem] ">
              Platea proident! Aute, rerum sociosqu numquam placerat, rerum
              molestias doloribus incidunt occaecati placeat,
            </span>{" "}
            <span className="lg:px-[11rem]">
              repellendus mus optio, totam cons.
            </span>
          </div>
          <div className="px-2 lg:px-[5rem]">
            <button
              class="border-[0.05rem] text-white/85 
         text-[0.92rem]    px-[1rem] md:px-[4rem] py-[0.5rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-50 "
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
    </>
  );
}

export default App;
