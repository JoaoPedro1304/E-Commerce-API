
export interface User{
    id:number
    name:string    
    password:string
    createdAt?:Date    
}
export interface Profile
{
    avatar : Buffer
    street : string
    number : number
    postalcode : string
}


export interface UserMethods{
    CreateUser(user:User) : Promise<User | null>
    CreateProfile(id:number, profile : Profile) : Promise<Profile>
    FindUserByName(name: string) : Promise<User | null>
    FindUserById(id: number) : Promise<User | null>
    UpdateUser(name:string,password:string, newName:string, newPassword:string) : Promise<User | null>
    DeleteUser(name:string,password:string):Promise<User | null>
}
