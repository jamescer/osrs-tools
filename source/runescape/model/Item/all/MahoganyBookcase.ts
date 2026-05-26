import { Item } from "../Item";

const MahoganyBookcaseData = {
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
    id: 8321,
    name: "Mahogany bookcase"
  }
export const MahoganyBookcase = Item.fromJson(MahoganyBookcaseData);
