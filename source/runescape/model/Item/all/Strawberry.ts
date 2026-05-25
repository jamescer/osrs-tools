import { Item } from "../Item";

const StrawberryData = {{
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
    id: 5504,
    name: "Strawberry"
  }
export const Strawberry = Item.fromJson(StrawberryData);