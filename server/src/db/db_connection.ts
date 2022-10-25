import {sequelize} from "./db_config";

export function connect_to_db() {
    sequelize.authenticate()
        .then(() => console.log('Connection with the database has been established successfully.'))
        .catch((err:any) => console.log('Unable to connect to the database: {}', err))
}