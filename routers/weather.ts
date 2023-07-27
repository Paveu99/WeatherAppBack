import {Router} from "express";
import {getData} from "../utils/db";

interface City {
    "id_stacji": string,
    "stacja": string,
    "data_pomiaru": string,
    "godzina_pomiaru": string,
    "temperatura": string,
    "predkosc_wiatru": string,
    "kierunek_wiatru": string,
    "wilgotnosc_wzgledna": string,
    "suma_opadu": string,
    "cisnienie": string
}

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
    .get('/:id', async (req, res) => {
        const weatherInPoland = await getData()
        let oneCity = weatherInPoland.filter((item: City) => item.stacja === req.params.id)[0]

        res.json({
            oneCity
        })
    })