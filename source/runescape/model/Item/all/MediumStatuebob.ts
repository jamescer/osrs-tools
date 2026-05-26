import { Item } from "../Item";

const MediumStatuebobData = {
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
    id: 8083,
    name: "Medium statue#Bob"
  }
export const MediumStatuebob = Item.fromJson(MediumStatuebobData);
