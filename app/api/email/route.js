import connectDB from "@/lib/config/db";
import Email from "@/lib/models/email.model";
import { NextResponse } from "next/server";

(async()=>{
  await connectDB();
})();

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get("email");
  await Email.create({email})
  return NextResponse.json({success: true, msg:"email added"})
}

export async function GET(request) {
  const emails = await Email.find({});
  return NextResponse.json({emails})
}

export async function DELETE(request) {
  const emailId = request.nextUrl.searchParams.get("id");
  await Email.findByIdAndDelete(emailId);
  return NextResponse.json({success: true, msg:"email deleted"})
}