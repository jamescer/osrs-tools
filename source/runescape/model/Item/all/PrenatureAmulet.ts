import { Item } from "../Item";

const PrenatureAmuletData = {
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
    id: 6041,
    name: "Pre-nature amulet"
  }
export const PrenatureAmulet = Item.fromJson(PrenatureAmuletData);
