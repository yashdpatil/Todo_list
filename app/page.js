"use client"
import React, { useState } from 'react'

const page = () => {
 const [title, settitle] = useState("")
 const [desc, setdesc] = useState("")
 const [MainTask, setMainTask] = useState([])
 const submithandler = (e)=>{
  e.preventDefault()
  // console.log(title);
  // console.log(desc);
  setMainTask([...MainTask,{title,desc}])
  settitle("")
  setdesc("")
  console.log(MainTask);
 }

 const delethandler = (i)=>{
  let copytask =[...MainTask]
  copytask.splice(i,1)
  setMainTask(copytask)

 }

 let renderTask = <h2> No task Available</h2>
 if(MainTask.length>0){
 renderTask = MainTask.map((t,i)=>{
  return(
    <li key={i} className='flex items-center justify-between'>
     <div className='flex justify-between mb-5 w-2/3'>
    <h5 className='text-2xl font-semibold'>
      {t.title}
    </h5>
    <h6 className='text-lg font-medium'>
      {t.desc}
    </h6>
  <button
  onClick={()=>{
    delethandler(i)
  }}
  className='bg-red-400 text-white rounded font-bold'> Delete </button>
 
  </div>
  </li>
  )
 
 })
}
  return (
    <>
<h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Yash Todo List</h1>
<form onSubmit={submithandler}>
  <input type = "text" className='text-2-xl border-zinc-800 m-8 border-2 px-4 py-2' placeholder='enter Title ' 
  value={title}
  onChange={(e)=>{
    settitle(e.target.value);
  }} />
  <input type = "text" className='text-2-xl border-zinc-800 m-8 border-2 px-4 py-2 ' placeholder='enter description'
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value);
  }}
  
  />
    <button className='bg-black text-white px-4 py-2 text-2xl m-5'> Add Title
    </button>

</form>
<hr/>
<div className='p-8 bg-slate-200'>
  <ul>
    {renderTask}
  </ul>

</div>



    </>
  )
}

export default page