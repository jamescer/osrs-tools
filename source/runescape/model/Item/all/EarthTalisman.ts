import { Item } from "../Item";

const EarthTalismanData = {{
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
    id: 1440,
    name: "Earth talisman"
  }
export const EarthTalisman = Item.fromJson(EarthTalismanData);