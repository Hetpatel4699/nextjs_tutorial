"use client"

import { useState } from "react"

export default function Page(){
    const [h3style,setH3style] = useState({backgroundColor: "green"})

    return (
        <div>
        <h1 style={{backgroundColor:"blue"}}>Welcome to Next.js</h1>
        <h2>Heading 2 in user page</h2>
        <h3 style={h3style}>Heading 3 in user page</h3>
        <button onClick={()=>setH3style({backgroundColor: "red"})}>Update Style</button>
        

        </div>
    )
}