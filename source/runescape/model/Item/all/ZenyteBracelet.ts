import { Item } from "../Item";

const ZenyteBraceletData = {
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
    id: 19532,
    name: "Zenyte bracelet"
  }
export const ZenyteBracelet = Item.fromJson(ZenyteBraceletData);
