import {Station} from "../../entity/Station";
import { AppDataSource } from "../../db/data-source"
import {count_stations_instances} from "../helpers/query_utils";
/*
beforeEach(async ()=>{
    await AppDataSource.initialize()
})
afterEach(async()=>{
    await AppDataSource.destroy()
})

describe("Station Class", ()=>{
    it("Should return all the stations in the database", async()=>{
        const count = await count_stations_instances()
        await expect(Station.fetchAll()).resolves.toHaveLength(+count[0].count)
    })
})
*/
