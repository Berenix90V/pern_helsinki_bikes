import {sequelize} from "../db/connection"
describe("Database connection", ()=>{
    test("Sequelize authenticate function", async ()=>{
        await expect(sequelize.authenticate()).resolves.not.toThrowError()
    })
})