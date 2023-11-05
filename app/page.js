 
"use client"
 import React, { useState } from 'react'
import { render } from 'react-dom'
 
 const page = () => {
  const [title, setTitle] = useState("")  
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
   
    
    setTitle("")
    setDesc("")

  }

  let renderTask =<h2 className='text-cyan-50'>No Task Available </h2>
   return (
   <>
      <h1 id='name' className='p-5 text-5xl
      text-yellow-400 text-center font-bold'>
      Todo List APP</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl
         border-zinc-800 border-2 m-4 px-4 py-1 ' 
         placeholder='Enter Task here'
         value={title}
         onChange={(e)=>{setTitle(e.target.value)}}
         />

        <input type="text" className='text-2xl
         border-zinc-800 border-2 m-4 px-4 py-1' 
         placeholder='Enter Description here'
         value={desc}
         onChange={(e)=>{setDesc(e.target.value)}}
         />

        <button className='bg-green-900 text-yellow-400
         px-4 py-2 text-2xl rounded m-5' >Add Task</button>
        
      </form>
      <hr/>

      <div className='p-8 bg-slate-500'>{renderTask}</div>
   </>
  

   )
 }
 
 export default page