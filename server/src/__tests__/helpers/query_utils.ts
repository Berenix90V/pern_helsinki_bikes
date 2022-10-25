// count the instances of a table
import {sequelize} from "../../db/db_config";
import {QueryTypes} from "sequelize";

// sequelize doesn't accept table as parameter so different metods are necessary

export async function count_stations_instances(){
    return await sequelize.query("SELECT count(*) FROM stations", {type: QueryTypes.SELECT})
}

export async function count_trips_instances(){
    return await sequelize.query("SELECT count(*) FROM trips", {type: QueryTypes.SELECT})
}