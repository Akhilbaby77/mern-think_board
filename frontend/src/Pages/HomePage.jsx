
import React  from 'react'
import NavBar from '../Components/NavBar'

import { useState,useEffect } from 'react'
import RateLimit from '../Components/RateLimit'
import "./HomePage.css"
import axios from "axios"
import toast from 'react-hot-toast'
import Note from '../Components/Note'

import NoNotesFound from '../Components/NoNotesFound'
import api from '../lib/axios'


  function HomePage() {

    const [rateLimit , setRateLimit] = useState(false)
    const [notes , setNotes] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      const getNotes=async()=>{
        try{
          const res = await api.get("/notes")
          console.log(res.data)
          setNotes(res.data)
          setRateLimit(false)
          

        }catch(error){
          console.log("error fetching notes",error)
          if(error.response?.status=== 429){
            setRateLimit(true)
          }else{
            toast.error("failed to load notes")
          }
        }finally{
          setLoading(false)
        }
      }
      getNotes()

    },[])
    const deleteNote = async (id) => {
      try {
        await api.delete(`/notes/${id}`);
        toast.success("Note deleted successfully ✅");

        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      } catch (error) {
        console.error("Error deleting note:", error);
        toast.error("Failed to delete note ❌");
      }
    };

    return (
  <div className='home-page'>
      <NavBar/>

      {rateLimit && <div className='rate'><RateLimit/></div>} 

      {loading && <div className='home-loading' style={{color:"white"}}>loading notes...</div>}  

      {notes.length === 0 && !rateLimit && <NoNotesFound/>}
      {notes.length > 0 && !rateLimit && (
  <div className='each-note-box'>
    {notes.map((note) => (
      <Note 
        key={note._id || note.id} 
        title={note.title} 
        content={note.content} 
        createdAt={note.createdAt}
        id = {note._id}
        onDelete={deleteNote} 
      />
    ))}
  </div>
  
)}


  </div>
    )
  }

   export default HomePage
