import { NextResponse } from "next/server";

export   function GET(request){
    return NextResponse.json({name:"Het",age:24,city:"visnagar"},{status:200})
}