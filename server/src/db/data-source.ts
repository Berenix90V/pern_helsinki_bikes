import {DataSource} from "typeorm";
require('dotenv').config()
import {Station} from "../entity/Station"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST!,
    port: +process.env.PG_PORT!,
    username: process.env.PG_USER!,
    password: process.env.PG_PASSWORD!,
    database: process.env.PG_DATABASE!,
    synchronize: true,
    logging: true,
    entities: [Station],
    subscribers: [],
    migrations: [],
})