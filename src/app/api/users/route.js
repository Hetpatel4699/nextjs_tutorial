import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data  = user;
    // console.log(data,content.params.id);
    return NextResponse.json(data,{status:200})
}