import { Item } from "../Item";

const StoneWallData = {
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
    id: 8198,
    name: "Stone wall"
  }
export const StoneWall = Item.fromJson(StoneWallData);
