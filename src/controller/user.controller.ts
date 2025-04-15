import { FastifyRequest, FastifyReply } from "fastify";
import { UserRepository } from "../repository/user.repository";
import { User } from "../interfaces/user.interface";


const userRepository  = new UserRepository()

export class UserController
{
    
        async CreateUser(request : FastifyRequest<{Body:User}>, reply: FastifyReply)
        {             
            const user = await userRepository.CreateUser(request.body)

            if(user){
                reply.status(201).send({message: `User ${user.name} Created!`})
            }
            reply.status(400).send({error:"User alredy exist!"})
        }
        async FindUserByName(request: FastifyRequest<{Querystring:{name:string}}>, reply: FastifyReply)
        {
            const{name}=request.query

            try
            {
                const user = await userRepository.FindUserByName(name)
                reply.status(200).send(user)
            }catch(e)
            {
                reply.status(400).send({error:"User not exists!"})
            }
        }

    
}