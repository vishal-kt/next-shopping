 
 'use client'
 import React, { useState } from 'react'
 
 const page = () => {
  const [title, settitle] = useState("")  
  const [desc, setdesc] = useState("")
   return (
   <>
      <h1 id='name' className='p-5 text-5xl
      text-yellow-400 text-center font-bold'>
      Todo List APP</h1>
      <form >
        <input type="text" className='text-2xl
         border-zinc-800 border-2 m-4 px-4 py-1 ' 
         placeholder='Enter Task here'/>

        <input type="text" className='text-2xl
         border-zinc-800 border-2 m-4 px-4 py-1' 
         placeholder='Enter Description here'/>

        <button className='bg-green-900 text-yellow-400
         px-4 py-2 text-2xl rounded m-5' >Add Task</button>
        
      </form>
   </>
  

   )
 }
 
 export default page