import { Item } from "../Item";

const TomeOfTheTempleData = {{
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 23508,
    name: "Tome of the temple"
  }
export const TomeOfTheTemple = Item.fromJson(TomeOfTheTempleData);