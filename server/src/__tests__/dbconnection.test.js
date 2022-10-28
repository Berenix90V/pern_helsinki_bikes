import { AppDataSource } from "../db/data-source"

describe("Database connection", ()=>{
    test("Sequelize authenticate function", async ()=>{
        await expect(AppDataSource.initialize()).resolves.not.toThrowError()
    })
})