import { Item } from "../Item";

const ShantayPassItemData = {
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
    id: 1854,
    name: "Shantay pass (item)"
  }
export const ShantayPassItem = Item.fromJson(ShantayPassItemData);
