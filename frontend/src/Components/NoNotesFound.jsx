

import React from "react"
import "./NoNotesFound.css"
import { useNavigate } from "react-router"

const NoNotesFound=()=>{

    const navigate =useNavigate()

    return(
           
        <div className="NoNotes">

            <div className="noteimg"><img src="writing.png" alt="write" /></div>

            <div><h2>NO NOTES FOUND</h2></div>

            <div className="sen"><p>ready to organize your notes? create your  </p><p> first note
                to get started on ur journey.</p></div>

                <button className="addnote" onClick={()=>navigate("/create")} >Create your first note</button>

        </div>
    )

}
export default NoNotesFound 