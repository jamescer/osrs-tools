import { Item } from "../Item";

const MuddyRockData = {
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
    id: 4492,
    name: "Muddy rock"
  }
export const MuddyRock = Item.fromJson(MuddyRockData);
