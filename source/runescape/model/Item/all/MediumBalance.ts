import { Item } from "../Item";

const MediumBalanceData = {
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
    id: 8157,
    name: "Medium balance"
  }
export const MediumBalance = Item.fromJson(MediumBalanceData);
