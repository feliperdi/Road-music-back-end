import UserModel from "../model/userModel";
import Basedatabase from "./baseDatabase";



export default class UserDatabase extends Basedatabase{
    private table: string = 'user'
    
    async createUser(user: UserModel){
        try{
           await this.getConnection().insert(user).into(this.table);
        }catch(e){
            throw new Error(e);
        }
    }

    async getUserById(id: string): Promise<UserModel> {
        try{
            const result : UserModel = await this.getConnection()
            .select("*").where({id}).into(this.table)
            return result;
        }catch(e){
            throw new Error(e);
        }
    }

    async getUserByNickname(nickname: string): Promise<UserModel> {
        try{
            const result : UserModel = await this.getConnection()
            .select("*").where({nickname}).into(this.table)
            return result;
        }catch(e){
            throw new Error(e);
        }
    }

    async getUserByEmail(Email: string): Promise<UserModel> {
        try{
            const result : UserModel = await this.getConnection()
            .select("*").where({Email}).into(this.table)
            return result;
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteUserById(id: string){
        try{
            const result : UserModel = await this.getConnection()
            .delete().where({id}).into(this.table)
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteUserByNickname(nickname: string){
        try{
            const result : UserModel = await this.getConnection()
            .delete().where({nickname}).into(this.table)
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteUserByEmail(email: string){
        try{
            const result : UserModel = await this.getConnection()
            .delete().where({email}).into(this.table)
        }catch(e){
            throw new Error(e);
        }
    }
}