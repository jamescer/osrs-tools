import { Item } from "../Item";

const BirdHouseItemData = {{
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
    id: 21512,
    name: "Bird house (item)"
  }
export const BirdHouseItem = Item.fromJson(BirdHouseItemData);