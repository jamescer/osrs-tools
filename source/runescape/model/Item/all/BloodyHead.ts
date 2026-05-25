import { Item } from "../Item";

const BloodyHeadData = {{
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
    id: 25147,
    name: "Bloody head"
  }
export const BloodyHead = Item.fromJson(BloodyHeadData);