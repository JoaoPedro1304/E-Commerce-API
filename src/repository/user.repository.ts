import { PrismaClient } from '@prisma/client';
import { IUser,UserResponse, Profile, User } from '../interfaces/user.interface';


export class UserRepository implements IUser
{    
    prismaCliente : PrismaClient
    constructor(){
        this.prismaCliente = new PrismaClient()
    }   

    async CreateUser(input : User): Promise<UserResponse> {
        
        if(await this.FindUserByName(input.name)!==null){
            return null
        }

        const user =await this.prismaCliente.user.create({
            data:{
                name:input.name,
                password:input.password   
            }
        })
        
        return {message: "User Created! ",id: user.id, name:user.name, createdAt: Date.now().toString()}
    }
   
    async FindUserByName(name: string): Promise<UserResponse> {

        const user = await this.prismaCliente.user.findFirst({
            where:{name:name}
        }) 
        if(user){

            return {message:"User Finded! ",id: user.id, name:user.name}
        }
        return null
               
       
    }

    async FindUserById(id: number): Promise<UserResponse> {
        
        const user = await this.prismaCliente.user.findFirst({
            where:{id:id}
        })       
        if(user){

            return {message:"User Finded! ",id: user.id, name:user.name}
        }
        return null
    }

    CreateProfile(profile: Profile): Promise<UserResponse> {
        throw new Error('Method not implemented.');
    }
    UpdateUser(name: string, password: string, newName: string, newPassword: string): Promise<UserResponse> {
        throw new Error('Method not implemented.');
    }
    DeleteUser(name: string, password: string): Promise<UserResponse> {
        throw new Error('Method not implemented.');
    }

   
    
}