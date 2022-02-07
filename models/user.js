import mongoose from "mongoose"
const Schema = mongoose.Schema


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    tickers: [String]
})

export const UserModel = mongoose.model("User", userSchema)