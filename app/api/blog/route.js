import connectDB from "@/lib/config/db";
import Blog from "@/lib/models/blog.model";
import { error } from "console";
import { writeFile } from "fs/promises";
import { title } from "process";
import fs from "fs";

const { NextResponse } = require("next/server");

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await Blog.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgURL = `/${timestamp}_${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  await Blog.create(blogData);
  console.log("Blog Saved");
  return NextResponse.json({ success: true, msg: "blog added" });
}

export async function DELETE(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  const blog = await Blog.findById(blogId);
  fs.unlink(`./public/${blog.image}`, () => {});
  await Blog.findByIdAndDelete(blogId);
  return NextResponse.json({ success: true, msg: "blog deleted" });
}
