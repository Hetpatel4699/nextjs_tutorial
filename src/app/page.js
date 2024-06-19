'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Het")
  const apple= () =>{
    setName("Patel")
    // alert(item)
  }

  const InnerComp = ()=>{
    return  (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Events , Function and State {name}</h1>
      <button onClick={()=>apple("color")}>Click Me </button>
      {/* <InnerComp/> */}
      {InnerComp()}
        </main>
  );
}
