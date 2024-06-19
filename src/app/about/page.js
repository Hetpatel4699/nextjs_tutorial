"use client"
import { useRouter } from "next/navigation"; 


import Link from "next/link";

const About =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={()=>router.push("./")}>Go To Home Page </button>
            <br/>
            <br/>
            <Link href="/about/aboutcollege">Go To About College Page</Link>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">Go To About Student Page</Link>
            

        </div>
    )
}
export default About;