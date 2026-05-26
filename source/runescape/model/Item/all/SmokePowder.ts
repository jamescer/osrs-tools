import { Item } from "../Item";

const SmokePowderData = {
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
    id: 24298,
    name: "Smoke powder"
  }
export const SmokePowder = Item.fromJson(SmokePowderData);
