import { Item } from "../Item";

const HolyGrailItemData = {{
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
    id: 19,
    name: "Holy grail (item)"
  }
export const HolyGrailItem = Item.fromJson(HolyGrailItemData);