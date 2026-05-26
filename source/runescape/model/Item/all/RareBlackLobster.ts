import { Item } from "../Item";

const RareBlackLobsterData = {
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
    id: 31879,
    name: "Rare black lobster"
  }
export const RareBlackLobster = Item.fromJson(RareBlackLobsterData);
