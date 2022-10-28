// count the instances of a table
import {AppDataSource} from "../../db/data-source";

// sequelize doesn't accept table as parameter so different metods are necessary

export async function count_stations_instances(){
    return await AppDataSource.query(`SELECT * FROM stations`)
}

export async function count_trips_instances(){
    return await AppDataSource.query(`SELECT * FROM trips`)
}