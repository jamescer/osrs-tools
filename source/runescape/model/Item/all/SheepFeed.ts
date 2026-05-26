import { Item } from "../Item";

const SheepFeedData = {
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
    id: 279,
    name: "Sheep feed"
  }
export const SheepFeed = Item.fromJson(SheepFeedData);
