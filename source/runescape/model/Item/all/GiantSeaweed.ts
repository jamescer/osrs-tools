import { Item } from "../Item";

const GiantSeaweedData = {
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
    id: 21504,
    name: "Giant seaweed"
  }
export const GiantSeaweed = Item.fromJson(GiantSeaweedData);
