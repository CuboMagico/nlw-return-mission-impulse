import express from "express"
import cors from "cors"

import { routes } from "./routes"


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

console.log(process.env)

app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor rodando")
})