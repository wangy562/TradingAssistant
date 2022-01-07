import express from "express"
import bodyParser from "body-parser"

require('dotenv').config()
const app = express() 
const router = express.Router()

app.get("/emails", (req, res) => {
    // get all email subscribers
    console.log("all emails")
})

app.get("/emails/:id", (req, res) => {
    // get email by ID
    console.log(`email identified by ${req.params.id}`)
})

app.listen(port, () => {})