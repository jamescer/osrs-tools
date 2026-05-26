import { Item } from "../Item";

const EchoCrystalData = {
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
    id: 28942,
    name: "Echo crystal"
  }
export const EchoCrystal = Item.fromJson(EchoCrystalData);
