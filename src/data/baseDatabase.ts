import Knex from 'knex';
import knex from 'knex';



export default class Basedatabase{
    protected getConnection(): Knex{
        return knex({
            client: "mysql",
            connection: {
                host: process.env.HOST,
                database: process.env.DB_NAME,
                user: process.env.USER_NAME,
                password: process.env.PASSWORD,
            }
        })
    }

   protected closeConnection(){
       this.getConnection().destroy();
   }
}