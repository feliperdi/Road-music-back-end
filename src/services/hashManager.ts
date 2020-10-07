import * as bcrypt from 'bcryptjs';


export default class HashManager{
    static async hash(s: string): Promise<string>{
        const rounds: number = Number(process.env.BCRYPT_COST);
        const salt: string = await bcrypt.genSalt(rounds);
        const result: string = await bcrypt.hash(s, salt);
        return result;
    }

    static async compare(s: string , hash: string): Promise<boolean>{
        return bcrypt.compare(s, hash);
    }
}