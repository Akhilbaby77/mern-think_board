import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import connectDb from "../config/bd.js"
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
dotenv.config()

const app = express()
connectDb()

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json( ))

app.use(rateLimiter)


app.use("/api/notes",notesRoutes ) 

app.listen(5001, () => {

    console.log("the backend is running")

})






