import {sequelize} from "../db/db_config"
describe("Database connection", ()=>{
    test("Sequelize authenticate function", async ()=>{
        await expect(sequelize.authenticate()).resolves.not.toThrowError()
    })
})