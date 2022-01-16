import express from "express"
import { router } from "./routes/emails.js"
import dotenv from "dotenv"

dotenv.config()
const app = express() 
const port = 8080

app.use("/api/emails", router)

app.listen(port, () => {})