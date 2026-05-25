import { Item } from "../Item";

const UnidentifiedMineralsData = {{
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
    id: 21341,
    name: "Unidentified minerals"
  }
export const UnidentifiedMinerals = Item.fromJson(UnidentifiedMineralsData);