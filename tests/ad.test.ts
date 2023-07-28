import {getData} from "../utils/db";
import {CityEntity} from "../types";

test('Testing if choosing one city is working', async () => {
    const id = 'Białystok'
    const weatherInPoland = await getData()
    let oneCity = weatherInPoland.filter((item: CityEntity) => item.stacja === id)[0]

    expect(oneCity.stacja).toEqual('Białystok')
})