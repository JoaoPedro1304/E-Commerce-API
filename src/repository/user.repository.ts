import{PrismaClient} from '@prisma/client'    
import { IUser, ICreateProfile, ICreateUser } from '../interfaces/user.interface';


export class UserRepository implements IUser
{
    prisma = new PrismaClient()

    async CreateUser(user : ICreateUser): Promise<Object> {
        
        if(await this.FindUserByName(user.name)){
            return {message:"User already exists."}
        }
        const createUser = await this.prisma.user.create({
            data:{
                name: user.name,
                password: user.password
            }
        })

        await this.prisma.$disconnect()
        
        return {message : `User ${createUser.name} created!`}
    }

    CreateProfile(profile: ICreateProfile): Promise<Object> {
        throw new Error('Method not implemented.');
    }
    
    async FindUserByName(input: string): Promise<object> {

        const user = await this.prisma.user.findFirst({where:{ name : input}})

        await this.prisma.$disconnect()
        
        if(user)
        { 
            return {id:user.id, user:user.name}
        }

        return {error:"User not found!"}
    }

    async FindUserById(input: Number): Promise<object> {
        const user = await this.prisma.user.findFirst({
            where:{
                id: Number(input)
            }
        })

        await this.prisma.$disconnect()

        if(user)
        { 
            return {id:user.id, user:user.id}
        }

        return {error:"User not found!"}
    }

    async UpdatePassword(userName: string, newPassword: string): Promise<Object> {

        const userId = this.prisma.user.findFirst({            
            where:{name: userName},
            select:{ id:true}            
        })
        
        const updateUser = await this.prisma.user.update({
            where:{id: Number(userId)},
            data:{password: newPassword}
        })

        await this.prisma.$disconnect()

        if(updateUser)
        {
            return {message: `${updateUser.name}, your password has been updated! `}
        }
        return {message: `Invalida data!`}
    }
    UpdateProfile(input ?: ICreateProfile): Promise<Object> {
        throw new Error('Method not implemented.');
    }
    
}