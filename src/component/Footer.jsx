import React from "react";

export default function Footer() {
  return (
    <footer className="w-11/12 m-auto xs:max-md:mt-2 mt-8 mb-4 xs:max-md:px-4 px-16 py-8 xs:max-md:pt-4 bg-stone-100 rounded-lg">
      <div className="grid grid-cols-4 xs:max-md:gap-2 xs:max-md:grid-cols-2">
        <div>
          <h4 className="font-bold xs:max-md:text-lg text-2xl text-[#1F2544] tracking-wider">
            Genres
          </h4>
          <ul className="tracking-widest xs:max-md:text-sm text-lg text-gray-700">
            <li>Comedy</li>
            <li>Drama</li>
            <li>Action</li>
            <li>Sci-fi</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold xs:max-md:text-lg text-2xl text-[#1F2544] tracking-wider">
            Links
          </h4>
          <ul className="tracking-widest xs:max-md:text-sm text-lg text-gray-700">
            <li>Login</li>
            <li>Register</li>
            <li>Order</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold xs:max-md:text-lg text-2xl text-[#1F2544] tracking-wider">
            Browse All
          </h4>
          <ul className="tracking-widest xs:max-md:text-sm text-lg text-gray-700">
            <li>Now Showing</li>
            <li>Coming Soon</li>
            <li>Shows</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold xs:max-md:text-lg text-2xl text-[#1F2544] tracking-wider">
            Enquiry
          </h4>
          <span className="tracking-widest xs:max-md:text-sm text-lg text-gray-700">
            Support Service
            <br />
            24/7
          </span>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-4 justify-center ">
          <span>
            <img className="w-6 xs:max-md:w-4" src="/img/twitter.svg" alt="" />
          </span>
          <span>
            <img className="w-6 xs:max-md:w-4" src="/img/fb.svg" alt="" />
          </span>
        </div>
        <div className="text-center xs:max-md:mt-1 mt-4">
          <span className="text-lg xs:max-md:text-sm text-gray-700 tracking-wider">
            © 2021 All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
