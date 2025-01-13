"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Alex Bennett",
    authorImg:"/author_img.png"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}))
    console.log(data);
    
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault(); //to be completed from api
  }
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-lg">Upload Blog Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image?assets.upload_area:URL.createObjectURL(image)}
            width={160}
            alt=""
            height={70}
            className="mt-4"
          />
        </label>
        <input
        type="file"
        id="image"
        hidden
        required
        onChange={(e) => setImage(e.target.files[0])} />
        <p className="text-lg mt-4">
          Title
        </p>
        <input
        type="text"
        name="title"
        value={data.title}
        placeholder="Type here"
        required
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black" />
        <p className="text-lg mt-4">
          Content
        </p>
        <textarea
        type="text"
        name="description"
        placeholder="Blog Content"
        required
        rows={6}
        onChange={onChangeHandler}
        value={data.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black" />
        <p className="text-lg mt-4">Category</p>
        <select
        name="category" className="mt-4 w-40 px-4 py-3 border-2 border-black text-gray-600" onChange={onChangeHandler} value={data.category}>
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Coding">Coding</option>
          <option value="Trends">Trends</option>
        </select>
        <br />
        <button type="submit" className='mt-8 mb-8 w-40 h-12 bg-black text-white font-bold'>
          POST BLOG
        </button>
      </form>
    </>
  );
};

export default page;
