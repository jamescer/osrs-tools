import { Item } from "../Item";

const JugOfBadWineData = {{
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
    id: 1991,
    name: "Jug of bad wine"
  }
export const JugOfBadWine = Item.fromJson(JugOfBadWineData);