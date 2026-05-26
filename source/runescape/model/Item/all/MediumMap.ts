import { Item } from "../Item";

const MediumMapData = {
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
    id: 8295,
    name: "Medium map"
  }
export const MediumMap = Item.fromJson(MediumMapData);
