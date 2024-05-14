import React from "react";
import { useState } from "react";
// import { Route } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const [menuId, setmenuId] = useState(0);

  const handleClick = () => {
    setClick(!click);
  };

  const menu = [
    {
      menuName: "Home",
      link: "/home",
      subMenus: [
        {
          menuName: "Product",
          link: "/product",
          // subMenus: [
          //   { menuName: "submenu1_1_1", link: "", subMenus: [] },
          //   { menuName: "submenu1_1_2", link: "", subMenus: [] },
          // ],
        },
        {
          menuName: "Clothes",
          link: "/clothes",
          // subMenus: [
          //   { menuName: "submenu1_1_1", link: "", subMenus: [] },
          //   { menuName: "submenu1_1_2", link: "", subMenus: [] },
          // ],
        },
        {
          menuName: "PRODUCTS",
          link: "/product",
          // subMenus: [
          //   { menuName: "submenu1_1_1", link: "", subMenus: [] },
          //   { menuName: "submenu1_1_2", link: "", subMenus: [] },
          // ],
        },
      ],
    },
    {
      menuName: "Blog",
      link: "/blog",
      subMenus: [
        {
          menuName: "NewBlog",
          link: "/blogging",
          // subMenus: [
          //   { menuName: submenu1_1_1, link: "", subMenus: [] },
          //   { menuName: submenu1_1_2, link: "", subMenus: [] },
          // ],
        },
      ],
    },
    {
      menuName: "New Arrivals",
      link: "/newarrivals",
      subMenus: [
        {
          menuName: "Shirts",
          link: "/shirts",
          // subMenus: [
          //   { menuName: submenu1_1_1, link: "", subMenus: [] },
          //   { menuName: submenu1_1_2, link: "", subMenus: [] },
          // ],
        },
      ],
    },
    {
      menuName: "Contact",
      link: "/contact",
      subMenus: [
        {
          menuName: "6353589776",
          // subMenus: [
          //   { menuName: submenu1_1_1, link: "", subMenus: [] },
          //   { menuName: submenu1_1_2, link: "", subMenus: [] },
          // ],
        },
      ],
    },
  ];

  // const content = (
  //   <div className={`lg:hidden flex flex-col items-center  p-3 font-semibold text-sm ${click ? 'block' : 'hidden'}`}>
  //   <nav className="flex items-center  p-3 font-semibold text-sm">
  //     <ul className="flex flex-col justify-between gap-4 items-center  p-3 font-semibold text-sm">
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Home</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Blog</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">New Arrivals</li>
  //       <li className="cursor-pointer border-b border-slate-400  hover:text-red-700">Contact</li>
  //     </ul>
  //   </nav>

  // </div>
  // );

  return (
    <div className="flex px-4  ">
      <div className="flex justify-between  w-full py-2  ">
        <div className=" flex font-bold text-2xl col-span-1  place-items-center p-2">
          <img
            className="max-w-screen-sm cursor-pointer xl:h-[13vh]"
            src="/vite.svg"
            alt="Image"
          />
        </div>
        <div className="hidden lg:flex  place-content-end items-center col-span-3 p-3  font-semibold text-sm ">
          <nav className=" flex place-content-end items-center col-span-3 p-3  font-semibold text-sm ">
            <ul className="flex  gap-8 place-content-end items-center col-span-3 p-3  font-semibold text-sm xl:text-[1rem]  ">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer hover:text-red-700"
                  onMouseOver={() => setmenuId(index)}
                >
                  <Link to={item.link}>{item.menuName}</Link>
                  {item.subMenus && menuId === index && (
                    <div className="absolute left-0 z-50 w-auto  bg-white border border-gray-200 rounded-[0.3rem] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                      {item.subMenus.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          onMouseLeave={() => setmenuId(0)}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          {subItem.menuName}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              {/* 
              <li className="cursor-pointer  hover:text-red-700">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="cursor-pointer  hover:text-red-700">
                <Link to="/newarrivals">New Arrivals</Link>
              </li>

              <li className="cursor-pointer  hover:text-red-700">
                <Link to="/contact">Contact</Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="  col-span-1 hidden lg:flex  place-content-center items-center p-2 gap-2">
          <span className=" ">
          <a href="https://in.pinterest.com/pin/705024516691334033/" target="_blank">
          <img
            className="h-12 cursor-pointer"
            src="/pintrest.jpg"
            alt="Pinterest"
          />
        </a>
          </span>
          <span className=" ">
            <a href="https://www.instagram.com/ivalinmabia?igsh=MnJkZXVuY3hvcHl5">
            <img
              className="h-5 cursor-pointer xl:h-7 "
              src="/insta.jpg"
              alt="insta"
            />
            </a>
          </span>
          <span className=" ">
            <a href="https://www.youtube.com/@Moongoddesscouturemadebyanitha">
            <img
              className="h-12 cursor-pointer xl:h-15 "
              src="/youtube.jpg"
              alt="youtube"
            />
            </a>
          </span>
        </div>
        {/* <div>
         <div>{content}</div>
        <button className=" block flex justify-center items-center lg:hidden border-2 border-pink-700 " onClick={handleClick}>
      { click ? <ImCross size={20} />: <IoReorderThree size={30} />}
        </button >
        </div> */}
        <div className="  flex justify-center items-center lg:hidden ">
          <IoReorderThree size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
