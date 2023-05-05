import cors from "cors";
import express,{ json,request,response } from "express";
import db from "./config/db.js";
import shoes from "./models/shoes.js";
import { Sequelize } from "sequelize";

const app = express();


app.use(cors());


app.use(express.json());


app.post('/add',)


db.sequelize.sync().then((result)=>{


    app.listen(3434,()=>{
        console.log("listening");
    })

})