import { Item } from "../Item";

const CursedGoblinHammerData = {
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
    id: 11707,
    name: "Cursed goblin hammer"
  }
export const CursedGoblinHammer = Item.fromJson(CursedGoblinHammerData);
