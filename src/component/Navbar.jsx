import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [menu]);
  return (
    <>
      <div>
        <nav className="w-11/12 flex xs:max-md:px-2 md:max-lg:px-4 px-6 items-center justify-between rounded-lg bg-stone-100 mt-6 m-auto">
          <div
            className="hidden xs:max-md:block cursor-pointer"
            onClick={() => setMenu(1)}
          >
            <span>
              <img className="object-conatin w-4" src="/img/menu.png" alt="" />
            </span>
          </div>
          <div>
            <span>
              <img
                className="object-conatin xs:max-md:w-16 w-28"
                src="/img/book_logo.png"
                alt=""
              />
            </span>
          </div>
          <div
            className={`${
              !menu
                ? "xs:max-md:-translate-x-full xs:max-md:hidden"
                : "xs:max-md:block"
            } xs:max-md:absolute xs:max-md:pt-8 xs:max-md:px-4 xs:max-md:w-5/6 xs:max-md:h-screen xs:max-md:top-0 xs:max-md:left-0 z-10  xs:max-md:bg-[#e9e2d0] transition-all  duration-700 ease-in-out`}
          >
            <div
              className="hidden xs:max-md:block hover:cursor-pointer"
              onClick={() => setMenu(0)}
            >
              <span>
                <img className="w-6" src="/img/cross.png" alt="" />
              </span>
            </div>
            <ul className="flex md:max-lg:gap-10 xs:max-md:pt-10 gap-12 xs:max-md:flex xs:max-md:flex-col xs:max-md:gap-4  text-xl font-semibold items-center justify-center text-[#4c3336]">
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest xs:max-md:border-[1px]  xs:max-md:border-solid xs:max-md:border-[#4c3336] xs:max-md:w-4/5 xs:max-md:h-8 xs:max-md:rounded-md xs:max-md:flex xs:max-md:items-center xs:max-md:justify-center xs:max-md:hover:no-underline cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest xs:max-md:border-[1px]  xs:max-md:border-solid xs:max-md:border-[#4c3336] xs:max-md:w-4/5 xs:max-md:h-8 xs:max-md:rounded-md xs:max-md:flex xs:max-md:items-center xs:max-md:justify-center xs:max-md:hover:no-underline cursor-pointer">
                <a href="/">Book</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest xs:max-md:border-[1px]  xs:max-md:border-solid xs:max-md:border-[#4c3336] xs:max-md:w-4/5 xs:max-md:h-8 xs:max-md:rounded-md xs:max-md:flex xs:max-md:items-center xs:max-md:justify-center xs:max-md:hover:no-underline cursor-pointer">
                <a href="/">Movies</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest xs:max-md:border-[1px]  xs:max-md:border-solid xs:max-md:border-[#4c3336] xs:max-md:w-4/5 xs:max-md:h-8 xs:max-md:rounded-md xs:max-md:flex xs:max-md:items-center xs:max-md:justify-center xs:max-md:hover:no-underline cursor-pointer">
                <a href="/">Shows</a>
              </li>
            </ul>
          </div>
          <div>
            <span>
              <img
                src="/img/avatar.png"
                alt=""
                className="xs:max-md:w-8 w-12 rounded-full bg-purple-500"
              />
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
