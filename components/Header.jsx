import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //logic yet to be implemented
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold text-xl sm:text-3xl">techBytes</h1>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black text-black shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image src={assets.arrow} className="text-white" alt="" />
        </button>
      </div>
      <div className="text-center my-8">
        <h2 className="text-lg sm:text-2xl font-medium">Latest Blogs</h2>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Dive into the world of latest technology trends, best practices and
          all things tech!
        </p>
        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
            onSubmit={onSubmitHandler}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
