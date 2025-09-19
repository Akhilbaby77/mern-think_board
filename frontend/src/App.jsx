import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import NoteDetailsPage from './Pages/NoteDetailsPage'
import CreatePage from './Pages/CreatePage'
import toast from 'react-hot-toast'


const App = () => {
  return (
    
      
     
      <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/note/:id' element={<NoteDetailsPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>

        </Routes>

      <button onClick={() => toast.success("congrats")}></button>
    </div>
    
  )
}

export default App
