import { Item } from "../Item";

const EvilChickensEggData = {
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
    id: 7477,
    name: "Evil chicken's egg"
  }
export const EvilChickensEgg = Item.fromJson(EvilChickensEggData);
