import { Item } from "../Item";

const CorpseOfWomanData = {
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
    id: 4488,
    name: "Corpse of woman"
  }
export const CorpseOfWoman = Item.fromJson(CorpseOfWomanData);
