import {Router} from "express";
import {getData} from "../utils/db";
import {CityEntity} from "../types";

export const weatherRouter = Router()

weatherRouter
    .get('/', async (req, res) => {
        const weatherInPoland = await getData()
        res.json({
            weatherInPoland
        })
    })