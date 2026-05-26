import { Item } from "../Item";

const RicksBoxData = {
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
    id: 24989,
    name: "Rick's box"
  }
export const RicksBox = Item.fromJson(RicksBoxData);
