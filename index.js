import express from "express"
import { router } from "./routes/emails.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express() 
const port = 8080

mongoose.connect(process.env.DB_CONN)

app.use(express.json())
app.use("/api/emails", router)

app.listen(port, () => {})