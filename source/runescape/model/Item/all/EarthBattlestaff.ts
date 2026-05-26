import { Item } from "../Item";

const EarthBattlestaffData = {
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
    id: 1399,
    name: "Earth battlestaff"
  }
export const EarthBattlestaff = Item.fromJson(EarthBattlestaffData);
