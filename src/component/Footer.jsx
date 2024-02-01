import React from "react";

export default function Footer() {
  return (
    <footer className="w-11/12 m-auto mt-8 mb-4 px-16 py-8 bg-stone-100 rounded-lg">
      <div className="grid grid-cols-4">
        <div>
          <h4 className="font-bold text-2xl text-[#1F2544] tracking-wider">
            Genres
          </h4>
          <ul className="tracking-widest text-lg text-gray-700">
            <li>Comedy</li>
            <li>Drama</li>
            <li>Action</li>
            <li>Sci-fi</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-[#1F2544] tracking-wider">
            Links
          </h4>
          <ul className="tracking-widest text-lg text-gray-700">
            <li>Login</li>
            <li>Register</li>
            <li>Order</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-[#1F2544] tracking-wider">
            Browse All
          </h4>
          <ul className="tracking-widest text-lg text-gray-700">
            <li>Now Showing</li>
            <li>Coming Soon</li>
            <li>Shows</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-[#1F2544] tracking-wider">
            Enquiry
          </h4>
          <span className="tracking-widest text-lg text-gray-700">
            Support Service
            <br />
            24/7
          </span>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-4 justify-center ">
          <span>
            <img className="w-6" src="/img/twitter.svg" alt="" />
          </span>
          <span>
            <img className="w-6" src="/img/fb.svg" alt="" />
          </span>
        </div>
        <div className="text-center mt-4">
          <span className="text-lg text-gray-700 tracking-wider">
            © 2021 All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
