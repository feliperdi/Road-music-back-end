import * as jwt  from 'jsonwebtoken';


export default class TokenHandle{
    static generate(id: string): string{
       return jwt.sign(
           {
               id,
           },
           process.env.JWT_KEY as string,
           {
               expiresIn: process.env.EXPIRE_IN as string
           }
       );
    }

    static validadeToken(token: string){
        jwt.verify(token, process.env.JWT_KEY as string);
    }
}