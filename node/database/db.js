import { Sequelize } from "sequelize";

const db = new Sequelize('blog', 'root', 'Center1501', {
    host:'localhost',
    dialect:'mysql'
})

export default db