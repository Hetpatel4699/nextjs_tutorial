"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation"; 

export default function Home() {

  const router = useRouter();
  const navigate =(name)=>{
    router.push(name);
  }
  return (
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go To Login Page</Link>
      <br/>
      <br/>
      <Link href="/about">Go To About Page</Link>
      <br/>
      <br/>
      <button onClick={()=> navigate  ("/login")} >Go TO Login Page</button>
      <br/>
      <br/>
      <button onClick={()=> router.push("/about")} >Go TO About Page</button>
    </main>
  );
}
