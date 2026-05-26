import { Item } from "../Item";

const BatteredKeyData = {
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
    id: 2887,
    name: "Battered key"
  }
export const BatteredKey = Item.fromJson(BatteredKeyData);
