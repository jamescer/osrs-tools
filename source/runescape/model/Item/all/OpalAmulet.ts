import { Item } from "../Item";

const OpalAmuletData = {
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
    id: 21108,
    name: "Opal amulet"
  }
export const OpalAmulet = Item.fromJson(OpalAmuletData);
