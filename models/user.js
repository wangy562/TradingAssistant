import mongoose from "mongoose"
const Schema = mongoose.Schema


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    subscriptions: [String]
})

export const User = mongoose.model("User", userSchema)