import {Router} from "express";
import {getData} from "../utils/db";

export const weatherRouter = Router()

weatherRouter
    .get('/', async (req, res) => {
        const weatherInPoland = await getData()
        for (const i of weatherInPoland) {
            console.log(i.stacja + ' ' + i.temperatura)
        }
        res.json({
            weatherInPoland
        })
    })