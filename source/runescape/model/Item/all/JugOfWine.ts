import { Item } from "../Item";

const JugOfWineData = {{
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
    id: 1993,
    name: "Jug of wine"
  }
export const JugOfWine = Item.fromJson(JugOfWineData);