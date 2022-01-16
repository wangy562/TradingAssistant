import requests from "requests"
import dotenv from "dotenv"

dotenv.config()

const api_key = process.env.TWT_API_KEY
const api_secret = process.env.TWT_API_SECRET
const bearer = process.env.BEARER 