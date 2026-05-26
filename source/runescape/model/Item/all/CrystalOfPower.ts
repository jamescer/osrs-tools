import { Item } from "../Item";

const CrystalOfPowerData = {
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
    id: 8353,
    name: "Crystal of power"
  }
export const CrystalOfPower = Item.fromJson(CrystalOfPowerData);
