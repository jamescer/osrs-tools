import { Item } from "../Item";

const ZenyteNecklaceData = {
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
    id: 19535,
    name: "Zenyte necklace"
  }
export const ZenyteNecklace = Item.fromJson(ZenyteNecklaceData);
