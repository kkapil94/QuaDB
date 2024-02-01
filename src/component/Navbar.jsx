import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="w-11/12 flex xs:max-md:px-2 md:max-lg:px-4 px-6 items-center justify-between rounded-lg bg-stone-100 mt-6 m-auto">
          <div>
            <span>
              <img
                className="object-conatin xs:max-md:w-14 w-28"
                src="/img/book_logo.png"
                alt=""
              />
            </span>
          </div>
          <div className="xs:max-md:hidden">
            <ul className="flex md:max-lg:gap-8 gap-12 text-xl font-semibold items-center justify-center text-[#4c3336]">
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest ">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest">
                <a href="/">Book</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest">
                <a href="/">Movies</a>
              </li>
              <li className="hover:underline underline-offset-[1.5rem] tracking-widest">
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
