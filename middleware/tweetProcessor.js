import requests from "requests"
import dotenv from "dotenv"

dotenv.config()

const api_key = process.env.TWT_API_KEY
const api_secret = process.env.TWT_API_SECRET
const bearer = process.env.TWT_BEARER_TOKEN 

// list of users to stream from
const streamUsernames = ["unusual_whales", "Deltaone"]