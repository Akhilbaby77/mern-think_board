import React, { useEffect } from 'react'
import "./NoteDetailsPage.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams,  } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import api from '../lib/axios';



const NoteDetailsPage=() => {
  const {id} = useParams()
  const navigate = useNavigate()

const [edtitle,setEdttitle] = useState("")
const [edcontent,setEdcontent] = useState("")

useEffect(()=>{
  const fetchNote=async()=>{
  try{

    const res = await api.get(`/notes/${id}`)
    setEdttitle(res.data.title)
    setEdcontent(res.data.content)

  }catch(error){
    console.log("error fetching",error)
    toast.error("note not fetched ❌")

  }

}
fetchNote()

},[id])

const deleteNote=async()=>{

try{
  await api.delete(`/notes/${id}`)
  toast.success(" note deleted ")
  navigate("/")

}catch(error){
console.log("error deleting",error)
toast.error("delete failed ❌")

}
}



const updateNote=async(e)=>{
  e.preventDefault()

  try{
    const res = await api.put(`/notes/${id}`,{
      title:edtitle,
      content:edcontent
    })
    
    navigate("/")
    toast.success("edited successfully ✅")


  }catch(error){
    console.log("not able to update",error)
    toast.error("edit failed")

  }
}



  return (              
  <div className='n'>
<div className='create-page'>
<button className='top-btn back'>

<Link className='back_btn' to={"/"}><IoIosArrowRoundBack size={20} /> Back</Link>
</button>

<button className='top-btn delete' onClick={deleteNote} >
  <FaRegTrashAlt size={14} />
  <span>Delete</span>
</button>

</div>

      <div className='input-details'>
      <form onSubmit={updateNote} >
      <h3> Edit Note</h3>
        <div className='a'><input placeholder='enter title' type="text" value={edtitle} onChange={(e)=>setEdttitle(e.target.value)}/></div>
        <div className='b'><textarea placeholder='enter note' value={edcontent} onChange={(e)=>setEdcontent(e.target.value)}></textarea></div>
        <button className='create' type='submit'  >Save</button>
        </form>
      </div>
    </div>
  )
}


export default NoteDetailsPage

