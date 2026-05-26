import { Item } from "../Item";

const CombatPathStarterKitData = {
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
    id: 24130,
    name: "Combat path starter kit"
  }
export const CombatPathStarterKit = Item.fromJson(CombatPathStarterKitData);
