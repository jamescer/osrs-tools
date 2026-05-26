import { Item } from "../Item";

const ZenyteAmuletData = {
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
    id: 19541,
    name: "Zenyte amulet"
  }
export const ZenyteAmulet = Item.fromJson(ZenyteAmuletData);
