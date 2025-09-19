
import express from "express"
import { getNotes, getNoteSingle } from "../controllers/notesController.js"
import { addNote } from "../controllers/notesController.js"
import { updatenote } from "../controllers/notesController.js"
import { deleteNote } from "../controllers/notesController.js"



const router = express.Router()


router.get("/", getNotes)
router.get("/:id",getNoteSingle)


router.post("/", addNote)

router.put("/:id", updatenote)

router.delete("/:id", deleteNote)


export default router