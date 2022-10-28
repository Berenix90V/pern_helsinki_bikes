// count the instances of a table
import {AppDataSource} from "../../db/data-source";

export async function connect_to_db(){
    await AppDataSource.initialize()
}

export async function close_connection_to_db(){
    await AppDataSource.destroy()
}

export async function count_stations_instances(){
    const data = await AppDataSource.query(`SELECT count(*) FROM stations`)
    return +data[0].count
}

export async function count_trips_instances(){
    return await AppDataSource.query(`SELECT * FROM trips`)
}