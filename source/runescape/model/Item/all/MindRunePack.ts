import { Item } from "../Item";

const MindRunePackData = {
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
    id: 12736,
    name: "Mind rune pack"
  }
export const MindRunePack = Item.fromJson(MindRunePackData);
