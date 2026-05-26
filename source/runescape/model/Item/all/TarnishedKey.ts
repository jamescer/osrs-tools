import { Item } from "../Item";

const TarnishedKeyData = {
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
    id: 6083,
    name: "Tarnished key"
  }
export const TarnishedKey = Item.fromJson(TarnishedKeyData);
