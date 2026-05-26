import { Item } from "../Item";

const MahoganyTableData = {
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
    id: 8120,
    name: "Mahogany table"
  }
export const MahoganyTable = Item.fromJson(MahoganyTableData);
