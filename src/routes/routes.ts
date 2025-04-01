import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserController } from "../controller/user.controller";
import { ICreateUser } from "../interfaces/user.interface";


const userController = new UserController()

export async function Routes(fastify:FastifyInstance) {    
    

    fastify.get('/',(req,reply)=>{
         reply.code(200).send({message:"home page"}) // retornar os produtos com estoque a cima de 0
        })

    fastify.get('/find-user-name', userController.FindUserByName)

    fastify.post('/create-user',userController.CreateUser)

    fastify.post('/login',(req,reply)=>{ 
        //Efetuar login de usuario, necessário criara sistema de login
        })
    fastify.get('/products',(req, reply)=>{
        //Retornar produtos em estoque
    })
    fastify.get('/products/cart',(req, reply)=>{
        //Retorna produtos adicionados ao carrinho
    })
}