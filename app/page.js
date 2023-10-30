"use client"
import React, { useState } from "react";
import Header from "@/Components/Header"
const page =()=>{ 
 let [marks , setMarks] =useState(80)
  return (
  <div>

    <Header/>
    <h1>My Score is {marks} </h1>
    <button id='btn'  onClick={()=>{
      setMarks(92)
    }}>Change</button>

  </div>
  )
}

export default page