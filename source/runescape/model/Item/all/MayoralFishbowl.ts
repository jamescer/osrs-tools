import { Item } from "../Item";

const MayoralFishbowlData = {
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
    id: 31330,
    name: "Mayoral fishbowl"
  }
export const MayoralFishbowl = Item.fromJson(MayoralFishbowlData);
