import { Item } from "../Item";

const MonkeySkinData = {{
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
    id: 3167,
    name: "Monkey skin"
  }
export const MonkeySkin = Item.fromJson(MonkeySkinData);