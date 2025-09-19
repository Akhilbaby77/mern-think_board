import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import connectDb from "../config/bd.js"
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"   // ✅ import this


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
connectDb()


if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: "http://localhost:5173"
  }))
}

app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes)


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"))
  })
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`🚀 The backend is running on port ${PORT}`)
})
