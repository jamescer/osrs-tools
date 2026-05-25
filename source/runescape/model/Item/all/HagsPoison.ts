import { Item } from "../Item";

const HagsPoisonData = {{
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
    id: 4604,
    name: "Hag's poison"
  }
export const HagsPoison = Item.fromJson(HagsPoisonData);