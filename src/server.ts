import fastify from "fastify"
import cors from "@fastify/cors"
import { Routes } from "./routes/routes"

const server = fastify()

server.register(cors,{
    origin:'*'
})
server.register(Routes)

const port = Number(process.env.PORT) || Number(3000)


server.listen({port},(error)=>{
    if(error)
    {
        console.error(error)
        process.exit(1)
    }
    console.log("Server is running on 'http://localhost:3000'")
})