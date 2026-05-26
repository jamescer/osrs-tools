import { Item } from "../Item";

const HazeelScrollData = {
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
    id: 2403,
    name: "Hazeel scroll"
  }
export const HazeelScroll = Item.fromJson(HazeelScrollData);
