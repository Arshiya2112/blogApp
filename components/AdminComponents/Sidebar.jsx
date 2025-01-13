import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="px-2 sm:pl-14 py-3 ">
        <h1 className="font-bold text-xl sm:text-3xl">techBytes</h1>
      </div>
      <div className="w-28 sm:w-80 relative py-12 border border-black h-full">
        <div className="w-[50%] sm:w-[80%] absolute right-0 mr-5">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add_icon} alt="" width={28} />
            <p>Add Blog</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.blog_icon} alt="" width={28} />
            <p>All Blogs</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Subscribed Users</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
