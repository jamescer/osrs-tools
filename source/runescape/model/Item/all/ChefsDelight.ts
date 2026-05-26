import { Item } from "../Item";

const ChefsDelightData = {
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
    id: 5755,
    name: "Chef's delight"
  }
export const ChefsDelight = Item.fromJson(ChefsDelightData);
