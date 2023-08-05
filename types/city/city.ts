import {CityEntity} from "./city.entity";

export type CheckCityReq = Omit<CityEntity, "id_stacji" | "data_pomiaru" | "godzina_pomiaru" | "predkosc_wiatru" | "kierunek_wiatru" | "wilgotnosc_wzgledna" | "suma_opadu" >