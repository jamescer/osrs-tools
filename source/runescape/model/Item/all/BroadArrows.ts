import { Item } from "../Item";

const BroadArrowsData = {
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
    id: 4160,
    name: "Broad arrows"
  }
export const BroadArrows = Item.fromJson(BroadArrowsData);
