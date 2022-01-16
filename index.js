import express from "express"
import router from "./routes/emails.js"
import dotenv from "dotenv"

dotenv.config()
const app = express() 

app.use("/api/emails", router)

app.listen(port, () => {})