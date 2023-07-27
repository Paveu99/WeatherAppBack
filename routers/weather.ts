import {Router} from "express";
import {getData} from "../utils/db";
import {CheckCityReq} from "../types";

export const weatherRouter = Router()

weatherRouter
    .get('/', async (req, res) => {
        const weatherInPoland = await getData()
        res.json({
            weatherInPoland
        })
    })
    .get('/:id', async (req, res) => {
        const weatherInPoland = await getData()
        let oneCity = weatherInPoland.filter((item: CheckCityReq) => item.stacja === req.params.id)[0]

        res.json({
            oneCity
        })
    })