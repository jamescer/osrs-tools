import { Item } from "../Item";

const TempleLibraryKeyData = {
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
    id: 7632,
    name: "Temple library key"
  }
export const TempleLibraryKey = Item.fromJson(TempleLibraryKeyData);
