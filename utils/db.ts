import fetch from "node-fetch";

export async function getData() {
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop')
    return await res.json();
}