
import React from 'react'
import "./CreatePage.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { toast} from 'react-hot-toast'
import axios from 'axios';
import api from '../lib/axios';


function CreatePage() {

const [title,setTitle] = useState("");
const [content,setContent] = useState("");
const [loading , setLoading] = useState(false)

const navigate =useNavigate() 

 const onSubmit=async (e)=>{
 e.preventDefault()

 if(!title.trim() || !content.trim()){
  toast.error('all fields are required')
 return   
 }

 setLoading(true)
 try{
await api.post("/notes" ,{
  title,
  content
})
toast.success("note created succesfully")
navigate("/")
 }catch(error){
  if(error.response.status === 429){
    toast.error("slow down , ur too fast🏎️🏎️❌ ")
  }else{
 console.log("error creating note",error)
 toast.error("failed to create note")
  }
 }finally{
  setLoading(false)
 }
 

 }
  return (
              
    <div className='n'>

<div className='create-page'>

<button className='top-btn back'>
  <IoIosArrowRoundBack size={20} />
  <Link className='back_btn' to={"/"}>Back</Link>
</button>



</div>


      <div className='input-details'>
      <form onSubmit={onSubmit}>
      <h3>Create New Note</h3>
        <div className='a'><input placeholder='enter title' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/></div>
      <div className='b'><textarea placeholder='enter note' value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea></div>
        <button className='create' type='submit' disabled={loading}>{loading?"creating...":"create"}</button>
        </form>
      </div>

    </div>
  )
}

export default CreatePage
 












