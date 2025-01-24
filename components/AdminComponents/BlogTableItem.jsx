import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  const BlogDate = new Date(date);

  //deletion logic to be implemented

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center hidden gap-3 sm:flex px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">Remove</td>
    </tr>
  );
};

export default BlogTableItem;
