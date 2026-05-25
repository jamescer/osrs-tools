import { Item } from "../Item";

const BirdFeedData = {{
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
    id: 422,
    name: "Bird feed"
  }
export const BirdFeed = Item.fromJson(BirdFeedData);