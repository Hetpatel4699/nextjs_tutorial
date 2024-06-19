"use client"
import { useRouter } from "next/navigation"; 


import Link from "next/link";

const About =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={()=>router.push("./")}>Go To Home Page </button>
            

        </div>
    )
}
export default About;