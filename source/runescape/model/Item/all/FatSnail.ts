import { Item } from "../Item";

const FatSnailData = {
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
    id: 3367,
    name: "Fat snail"
  }
export const FatSnail = Item.fromJson(FatSnailData);
