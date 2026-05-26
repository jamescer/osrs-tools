import { Item } from "../Item";

const StuffedSnakeData = {
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
    id: 7579,
    name: "Stuffed snake"
  }
export const StuffedSnake = Item.fromJson(StuffedSnakeData);
