import { UserRepository } from "../repository/user.repository"

const userRepository = new UserRepository()

export async function AutenticateUser(name:string, password:string) : Promise<boolean> {
    const user =userRepository.VerifyIdentity(name, password)
    
    if(user !== undefined)
    {
        return true
    }
    return false
}