import { Item } from "../Item";

const StrangeSkullData = {
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
    id: 9009,
    name: "Strange skull"
  }
export const StrangeSkull = Item.fromJson(StrangeSkullData);
