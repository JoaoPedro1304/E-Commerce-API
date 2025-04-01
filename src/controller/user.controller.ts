import { FastifyRequest, FastifyReply } from "fastify";
import { UserRepository } from "../repository/user.repository";
import { User } from "../interfaces/user.interface";

const userRepository  = new UserRepository()

export class UserController
{
    
        async CreateUser(request : FastifyRequest<{Body:User}>, reply: FastifyReply)
        {             
            try
            {
                const user = await userRepository.CreateUser(request.body)
                reply.status(201).send(user)
            }catch(e)
            {
                reply.status(400).send(e)
            }
          
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