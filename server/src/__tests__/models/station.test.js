import {Station} from "../../models/Station";
import {sequelize} from "../../db/db_config";
import {QueryTypes} from "sequelize";
import {count_stations_instances} from "../helpers/query_utils";

beforeEach(async ()=>{
    await sequelize.authenticate()
})
afterEach(async()=>{
    await sequelize.close()
})

describe("Station Class", ()=>{
    it("Should return all the stations in the database", async()=>{
        const count = await count_stations_instances()
        await expect(Station.fetchAll()).resolves.toHaveLength(+count[0].count)
    })
})