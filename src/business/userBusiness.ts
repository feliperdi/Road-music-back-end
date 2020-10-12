import UserModel from "../model/userModel";



export default class UserBusiness{

    static validate(user: UserModel){
        if( user.name && user.nickname && user.email ){
            if( user.password.length >= 6) {
                return true
            }
        }
    }
}