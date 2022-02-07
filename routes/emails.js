import express from "express"
import { UserModel } from "../models/user.js"

export const router = express.Router() 

router.get("/:id", (req, res) => {
    const { userId } = req.params
    UserModel.findById(userId, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user)
        }
    })
})

router.delete("/delete_email/:email", (req, res) => {
    const { email } = req.params
    UserModel.findOneAndDelete({ email: email }, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user)
        }
    })
})

router.post("/add_email/:email/", (req, res) => {
    const { email } = req.params
    const { tickers } = req.body
    const user = new UserModel({email: email, tickers: tickers})
    await user.save()
    //TODO validate user has been added
    res.status(200).json(user)
})

router.get("/:id/following", (req, res) => {
    const { userId } = req.params
    const user = UserModel.findById(userId, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user.tickers)
        }
    })
})

router.put("/:id/update_following", (req, res) => {
    const { userId } = req.params
    const { tickers } = req.body
    const user = UserModel.findByIdAndUpdate(userId, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200)
        }
    } )
})