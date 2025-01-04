
export interface ICreateUser{
    name:string    
    password:string
}
export interface ICreateProfile
{
    avatar ?: Buffer
    street ?: string
    number ?: number
    postalcode ?: number        
}

export interface IUser{
    CreateUser(user : ICreateUser) : Promise<Object>
    CreateProfile(profile : ICreateProfile) : Promise<Object>
    FindUserByName(input: string) : Promise<boolean>
    FindUserById(input: Number) : Promise<boolean>
    UpdatePassword(input: string, newPassword: string) : Promise<Object>
    UpdateProfile(input: string) : Promise<Object>
}
