import { FastifyInstance } from "fastify";


export async function Routes(fastify:FastifyInstance) {
    
    fastify.get('/',(req,reply)=>{
         reply.code(200).send() // retornar os produtos com estoque a cima de 0
        })
    fastify.post('/CreateUser',(req,reply)=>{ 
            //Criar conta
        })
    fastify.post('/login',(req,reply)=>{ 
        //Efetuar login de usuario
        })
    fastify.get('/products',(req, reply)=>{
        //Retornar produtos em estoque
    })
    fastify.get('/products/cart',(req, reply)=>{
        //Retorna produtos adicionados ao carrinho
    })
}