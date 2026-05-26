import { Item } from "../Item";

const MysticGlovesData = {
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
    id: 4095,
    name: "Mystic gloves"
  }
export const MysticGloves = Item.fromJson(MysticGlovesData);
