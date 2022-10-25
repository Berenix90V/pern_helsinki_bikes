import {Sequelize} from 'sequelize'
require('dotenv').config()


export const sequelize = new Sequelize(process.env.PG_DATABASE!, process.env.PG_USER!, process.env.PG_PASSWORD!, {
    host: process.env.PG_HOST!,
    dialect: 'postgres',
    port: +process.env.PG_PORT! // + to convert string to integer
});



