import { Item } from "../Item";

const MazeKeyData = {
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
    id: 1542,
    name: "Maze key"
  }
export const MazeKey = Item.fromJson(MazeKeyData);
