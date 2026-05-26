import { Item } from "../Item";

const DragonstoneData = {
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
    id: 1615,
    name: "Dragonstone"
  }
export const Dragonstone = Item.fromJson(DragonstoneData);
