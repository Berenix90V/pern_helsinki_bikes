import app from "../../server"
import request from "supertest"
import {count_stations_instances, connect_to_db, close_connection_to_db} from "../helpers/query_utils"

beforeEach( async()=>{
    await connect_to_db()
})

afterEach( async()=>{
    await close_connection_to_db()
})

describe("All stations route", ()=>{
    test("GET / ",  async () => {
        const res = await request(app).get('/api/v1/stations')
        const count = await count_stations_instances()
        expect(res.body.data.stations).toHaveLength(count)
        expect(res.statusCode).toBe(200)
    });
})