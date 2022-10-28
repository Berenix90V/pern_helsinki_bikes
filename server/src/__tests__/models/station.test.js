import {Station} from "../../entity/Station";
import { AppDataSource } from "../../db/data-source"
import {count_stations_instances, connect_to_db, close_connection_to_db} from "../helpers/query_utils";

beforeEach(async ()=>{
    await connect_to_db()
})
afterEach(async()=>{
    await close_connection_to_db()
})

describe("Station Class", ()=>{
    it("Should return all the stations in the database", async()=>{
        const count = await count_stations_instances()
        await expect(Station.fetchAll()).resolves.toHaveLength(count)
    })
})

