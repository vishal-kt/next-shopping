 
"use client"
 import React, { useState } from 'react'
import { render } from 'react-dom'
 
 const page = () => {
  const [title, setTitle] = useState("")  
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
   
    setMainTask([...mainTask,{title,desc}]);

    setTitle("") ;
    setDesc("");
  };

  
  let renderTask =<h2 className='text-cyan-50'>No Task Available </h2>;

  const deleteHandler =(i)=>{

      let copyTask =[...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
  }
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{

      return (
        <li key={i} className='flex items-center justify-between mb-5'>
            <div className='flex items-center justify-between  w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-semibold'>{t.desc}</h6>
          </div>
          <button
          onClick={
            ()=>{
              deleteHandler(i)
            }
          }
          className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    });
  }
  
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

      <div className='p-8 bg-slate-500'><ul>{renderTask}</ul></div>
   </>
  

   )
 }
 
 export default page