import { Item } from "../Item";

const DiamondAmuletData = {
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
    id: 1700,
    name: "Diamond amulet"
  }
export const DiamondAmulet = Item.fromJson(DiamondAmuletData);
