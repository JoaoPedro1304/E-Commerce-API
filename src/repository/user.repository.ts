import { PrismaClient } from '@prisma/client';
import { UserMethods, Profile, User} from '../interfaces/user.interface';


export class UserRepository implements UserMethods
{    
    prismaCliente : PrismaClient
    constructor(){
        this.prismaCliente = new PrismaClient()
    } 

    async CreateUser(input : User): Promise<User | null> {

        if(await this.FindUserByName(input.name)){

            return await this.prismaCliente.user.create({
                data:{
                    name:input.name,
                    password:input.password                
                }
            })        
        }

        return null
       
    }
   
    async FindUserByName(name: string): Promise<User|null> {

        return await this.prismaCliente.user.findFirst({
            where:{name:name}
        })
       
    }

    async FindUserById(id: number): Promise<User | null> {
        
        return await this.prismaCliente.user.findFirst({
            where:{id:id}
        })       
 
    }

    async CreateProfile(id:number, profile: Profile): Promise<Profile> {
        const _profile = await this.prismaCliente.profile.create({
            data:
                {   avatar: profile.avatar,                          
                    street:profile.street,
                    number:profile.number,
                    postalcode:profile.postalcode,
                    profileId:id
                }
            })
            throw new Error('Method not implemented')

    }
    UpdateUser(name: string, password: string, newName: string, newPassword: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    DeleteUser(name: string, password: string): Promise<User> {
        throw new Error('Method not implemented.');
    }

   
    
}