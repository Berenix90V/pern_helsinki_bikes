import { AppDataSource } from "./data-source"

export function connect_to_db() {
    AppDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
}


