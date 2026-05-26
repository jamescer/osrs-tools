import { Item } from "../Item";

const GoblinStewData = {
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
    id: 25289,
    name: "Goblin stew"
  }
export const GoblinStew = Item.fromJson(GoblinStewData);
