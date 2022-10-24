import app from "../server"
import request from "supertest"
import {count_stations_instances} from "./helpers/query_utils"

describe("All stations route", ()=>{
    test("GET / ",  async () => {
        const res = await request(app).get('/api/v1/stations')
        const count = await count_stations_instances()
        expect(res.body.data.stations).toHaveLength(+count[0].count)

    });
})