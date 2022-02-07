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

router.get("/get_email", async (req, res) => {
    const { email } = req.body
    const user = await UserModel.findOne({ email: email }).exec()
    res.status(200).json(user)
    //TODO find out why findOne is returning null
})

router.delete("/delete_email/:email", async (req, res) => {
    const { email } = req.params
    await UserModel.findOneAndDelete({ email: email }, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user)
        }
    })
})

router.post("/add_email", async (req, res) => {
    const { email, tickers } = req.body
    const existingUser = await UserModel.findOne({ email: email }).exec()
    if (existingUser == null) {
        const userNew = new UserModel({ email: email, tickers: tickers })
        await userNew.save()
        res.status(200).json(userNew)
    } else {
        res.sendStatus(502)
    }
})

router.get("/:id/following", async (req, res) => {
    const { userId } = req.params
    await UserModel.findById(userId, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user.tickers)
        }
    })
})

router.put("/:id/update_following", async (req, res) => {
    const { userId } = req.params
    const { tickers } = req.body
    await UserModel.findByIdAndUpdate(userId, (err, user) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(user)
        }
    })
})