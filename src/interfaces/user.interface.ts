
export interface User{
    name:string    
    password:string
    createdAt?:string
}
export interface Profile
{
    avatar : Buffer
    street : string
    number : number
    postalcode : string
}

export type UserResponse= {message:string, id?: number, name?: string, createdAt?: string} | null

export interface IUser{
    CreateUser(user:User) : Promise<UserResponse>
    CreateProfile(profile : Profile) : Promise<UserResponse>
    FindUserByName(name: string) : Promise<UserResponse>
    FindUserById(id: number) : Promise<UserResponse>
    UpdateUser(name:string,password:string, newName:string, newPassword:string) : Promise<UserResponse>
    DeleteUser(name:string,password:string):Promise<UserResponse>
}
