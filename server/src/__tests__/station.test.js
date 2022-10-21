import {Station} from "../models/Station";
import {sequelize} from "../db/connection";
import {QueryTypes} from "sequelize";

beforeEach(async ()=>{
    await sequelize.authenticate()
})
afterEach(async()=>{
    await sequelize.close()
})

describe("Station", ()=>{
    it("Should return all the stations in the database", async()=>{
        const count = await sequelize.query("SELECT count(*) from stations", {type: QueryTypes.SELECT})
        await expect(Station.fetchAll()).resolves.toHaveLength(+count[0].count)
    })
})