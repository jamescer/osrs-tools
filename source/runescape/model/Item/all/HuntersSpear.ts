import { Item } from "../Item";

const HuntersSpearData = {
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
    id: 29305,
    name: "Hunter's spear"
  }
export const HuntersSpear = Item.fromJson(HuntersSpearData);
