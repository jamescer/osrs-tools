import { Item } from "../Item";

const FileRockingOutemptyData = {
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
    id: 31379,
    name: "File (Rocking Out)#Empty"
  }
export const FileRockingOutempty = Item.fromJson(FileRockingOutemptyData);
