import {getData} from "../utils/db";
import {CityEntity} from "../types";

test('Testing if choosing one city is working', async () => {
    const id = 'Białystok'
    const weatherInPoland = await getData()
    let oneCity = weatherInPoland.filter((item: CityEntity) => item.stacja === id)[0]

    expect(oneCity.stacja).toEqual('Białystok')
})

test('Testing whether the data that comes in is string', async () => {
    const id: string = 'Białystok'
    const weatherInPoland = await getData()
    let oneCity = weatherInPoland.filter((item: CityEntity) => item.stacja === id)[0]

    for (const oneCityKey in oneCity) {
        expect(typeof oneCity[oneCityKey]).toBe('string')
    }
})

test('Testing if the amount of cities is equal to 62', async () => {
    const weatherInPoland = await getData()
    expect(weatherInPoland.length).toEqual(62)
})

test('Testing if downloaded data is coming in', async () => {
    const weatherInPoland = await getData()

    expect(weatherInPoland).toBeTruthy()
})

test('Testing if number of keys in entity is equal 10', async () => {
    const id: string = 'Białystok'
    const weatherInPoland = await getData()
    let oneCity = weatherInPoland.filter((item: CityEntity) => item.stacja === id)[0]

    let numberOfKeys = 0

    for (const oneCityKeys in oneCity) {
        numberOfKeys++
    }

    expect(numberOfKeys).toEqual(10)
})