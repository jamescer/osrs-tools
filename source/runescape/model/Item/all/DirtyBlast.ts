import { Item } from "../Item";

const DirtyBlastData = {
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
    id: 7497,
    name: "Dirty blast"
  }
export const DirtyBlast = Item.fromJson(DirtyBlastData);
