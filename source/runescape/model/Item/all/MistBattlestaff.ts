import { Item } from "../Item";

const MistBattlestaffData = {
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
    id: 20730,
    name: "Mist battlestaff"
  }
export const MistBattlestaff = Item.fromJson(MistBattlestaffData);
