import { FastifyRequest, FastifyReply } from "fastify";
import { UserRepository } from "../repository/user.repository";
import { ICreateUser } from "../interfaces/user.interface";

export class UserController
{
    constructor()
    {
        const userRepository  = new UserRepository()

        async function CreateUser(request : FastifyRequest<{Body:ICreateUser}>, reply: FastifyReply)
        {
            try
            {
                reply.status(201).send(userRepository.CreateUser(request.body))
            }catch(e)
            {
                reply.status(400).send(e)
            }
          
        }
        
        async function UpdateUserPassword(request: FastifyRequest<{Body:{oldPass:string, newPass:string}}>, reply:FastifyReply)
        {

            userRepository.UpdatePassword(request.body.oldPass, request.body.newPass)
        }

        async function CreateProfile(){}    

    }
}