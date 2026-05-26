import { Item } from "../Item";

const BeadsOfTheDeadData = {
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
    id: 616,
    name: "Beads of the dead"
  }
export const BeadsOfTheDead = Item.fromJson(BeadsOfTheDeadData);
