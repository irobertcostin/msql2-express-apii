import { Sequelize } from "sequelize";





export default (sequelize) => {


    class Shoes extends Sequelize.Model { };

    Shoes.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        designer: {
            type: Sequelize.STRING,
            allowNull: false,

            validate: {
                notNull: { msg: "Provide a designer" }
                , 
                notEmpty: {msg:"Provide a designer"}
            }
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false,

            validate: {
                notNull: { msg: "Provide a model" }
                , 
                notEmpty: {msg:"Provide a model"}
            }
        },
        year: {
            type:Sequelize.DATEONLY,
            allowNull:false,
            validate:{
                notNull:{
                    msg:"Provide a  date"
                },
                notEmpty:{
                    msg:"Provide a  date"
                }
            }
        },
        price: {
            type:Sequelize.INTEGER,
            allowNull:false,
            validate:{
                notNull:{
                    msg:"Provide  price"
                },
                notEmpty:{
                    msg:"Provide  price"
                }
            }
        }
    },{
        sequelize,
        timeStamps:false,
        createAt:false,
        updatedAt:false
        
    });


    return Shoes;

}