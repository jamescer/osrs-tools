import { Item } from "../Item";

const RuneCannonballData = {
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
    id: 31914,
    name: "Rune cannonball"
  }
export const RuneCannonball = Item.fromJson(RuneCannonballData);
