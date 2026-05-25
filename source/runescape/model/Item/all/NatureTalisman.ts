import { Item } from "../Item";

const NatureTalismanData = {{
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
    id: 1462,
    name: "Nature talisman"
  }
export const NatureTalisman = Item.fromJson(NatureTalismanData);