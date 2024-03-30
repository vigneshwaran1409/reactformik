import axios from 'axios'
const API_URL = "https://6606633ebe53febb857dd017.mockapi.io"

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService


