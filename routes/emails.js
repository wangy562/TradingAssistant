import express from "express"

export const router = express.Router() 

router.get("/", (req, res) => {
    // get all email subscribers
    console.log("all emails")
})

router.get("/:id", (req, res) => {
    // get email by ID
    console.log(`email identified by ${req.params.id}`)
})

router.post("/add_email", (req, res) => {
    // add a new email

})