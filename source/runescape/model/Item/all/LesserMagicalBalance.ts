import { Item } from "../Item";

const LesserMagicalBalanceData = {
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
    id: 8156,
    name: "Lesser magical balance"
  }
export const LesserMagicalBalance = Item.fromJson(LesserMagicalBalanceData);
