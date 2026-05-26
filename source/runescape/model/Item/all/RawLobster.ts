import { Item } from "../Item";

const RawLobsterData = {
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
    id: 377,
    name: "Raw lobster"
  }
export const RawLobster = Item.fromJson(RawLobsterData);
