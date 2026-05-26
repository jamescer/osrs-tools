import { Item } from "../Item";

const EmeraldAmuletData = {
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
    id: 1696,
    name: "Emerald amulet"
  }
export const EmeraldAmulet = Item.fromJson(EmeraldAmuletData);
