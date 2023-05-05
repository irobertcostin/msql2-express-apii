import { Sequelize } from "sequelize";
import shoes from "../models/shoes.js";




const connectDb = () =>{


    try {
        let sequelize = new Sequelize (
            "endclothing_db",
            "root",
            "Borisescul23",
            {
                host:"localhost",
                dialect:"mysql"
            }
        )


        let db = {
            models:{}
        };


        db.Sequelize = Sequelize;

        db.sequelize = sequelize;

        db.models.shoes = shoes(sequelize)

        return db;

    } catch (error) {
        console.log(error);
    }



}


let db=connectDb();

export default db;