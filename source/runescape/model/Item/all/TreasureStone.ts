import { Item } from "../Item";

const TreasureStoneData = {
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
    id: 7677,
    name: "Treasure stone"
  }
export const TreasureStone = Item.fromJson(TreasureStoneData);
