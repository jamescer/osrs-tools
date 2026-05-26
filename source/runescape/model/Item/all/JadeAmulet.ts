import { Item } from "../Item";

const JadeAmuletData = {
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
    id: 21111,
    name: "Jade amulet"
  }
export const JadeAmulet = Item.fromJson(JadeAmuletData);
