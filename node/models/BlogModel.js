//IMportar la conexion a la BD
import db from "../database/db.js";
//import sequlize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blog',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
}, {
    //Especifico el nombre en singular para que sequalize no lo busque en la BD en plural
    tableName: 'blog'
})
export default BlogModel