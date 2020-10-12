import {Response, Request } from 'express';
import UserBusiness from '../business/userBusiness';
import UserDatabase from '../data/userDatabase';
import UserModel from '../model/userModel';
import HashManager from '../services/hashManager';
import IdHandle from '../services/idHandle';
import TokenHandle from '../services/tokenHandle';


export default class User{

   async createUser(req: Request, res: Response){
        try{
            if( UserBusiness.validate(req.body) ){
                const db = new UserDatabase();
                const id = IdHandle.generate();
                const token = TokenHandle.generate(id);
                const hash =  await HashManager.hash(req.body.password);
                const user: UserModel = {
                    id: id,
                    email: req.body.email,
                    nickname: req.body.nickname,
                    name: req.body.name,
                    password: hash
                }
                await db.createUser(user);
                res.status(200).send({ user, token});
            }
        }catch(e){
            res.status(400).send(e+"");
        }       
    }
}