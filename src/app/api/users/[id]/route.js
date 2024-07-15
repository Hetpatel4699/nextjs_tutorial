import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const useData = user.filter((item)=>item.id==content.params.id)
    return NextResponse.json(useData.length==0?{result:"No Data Found",success:false}:{result:useData,success:true},
        {status:200}) 
}