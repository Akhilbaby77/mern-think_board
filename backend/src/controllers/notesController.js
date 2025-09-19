import Note from "../../models/Note.js"


export async function getNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)

    }catch(error){
        console.error("error in getNotes",error)
        res.status(500).json({message:"internal server error"})
    }
}


export async function getNoteSingle(req, res) {
    try {
      const note = await Note.findById(req.params.id);
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.json(note);
    } catch (error) {
      console.error("error in getNoteSingle", error);
      res.status(500).json({ message: "internal server error" });
    }
  }

 export async function addNote(req,res){
    try{
 const {title , content} = req.body
 const newNote = new Note({title:title,content:content})

 await newNote.save()
        res.status(201).json({message:"new note created sucessfully"})

    }catch(error){
        console.error("error in NewNote",error)
        res.status(500).json({message:"internal server error"})
    }
}




export async function updatenote(req,res){
    try{

        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content})
        if(!updatedNote)return res.status(404).json({message:"note not found"})
        res.status(200 ).json({message:"updated sucessfully"})

    }catch(error){
        console.error("error in NewNote",error)
        res.status(500).json({message:"internal server error"})
    }
}



export async function deleteNote(req,res) {

 try{

    const {title,content} = req.body
    const deletedNote = await Note.findByIdAndDelete(req.params.id,{title,content})
    if(!deletedNote)return res.status(404).json({message:"note not found"})
    res.status(200 ).json({message:" note deleted sucessfully"})

}catch(error){
    console.error("error in NewNote",error)
    res.status(500).json({message:"internal server error"})
}
} 


