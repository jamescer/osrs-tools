import { Item } from "../Item";

const OakLecternData = {
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
    id: 8334,
    name: "Oak lectern"
  }
export const OakLectern = Item.fromJson(OakLecternData);
