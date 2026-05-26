import { Item } from "../Item";

const KingArthurPortraitData = {
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
    id: 8285,
    name: "King arthur (portrait)"
  }
export const KingArthurPortrait = Item.fromJson(KingArthurPortraitData);
