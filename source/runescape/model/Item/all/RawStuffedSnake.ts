import { Item } from "../Item";

const RawStuffedSnakeData = {{
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
    id: 7577,
    name: "Raw stuffed snake"
  }
export const RawStuffedSnake = Item.fromJson(RawStuffedSnakeData);