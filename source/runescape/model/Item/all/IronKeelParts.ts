import { Item } from "../Item";

const IronKeelPartsData = {
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
    id: 32002,
    name: "Iron keel parts"
  }
export const IronKeelParts = Item.fromJson(IronKeelPartsData);
