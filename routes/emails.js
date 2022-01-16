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

router.delete("/delete_email", (req, res) => {
    // delete specified email
    
})

router.post("/add_email", (req, res) => {
    // add a new email

})

router.get("/:id/following", (req, res) => {
    // get followed tickers list for user by ID
})

router.put("/:id/update_following", (req, res) => {
    // update followed tickers list for user by ID
})