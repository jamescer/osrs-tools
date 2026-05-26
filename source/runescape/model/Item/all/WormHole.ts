import { Item } from "../Item";

const WormHoleData = {
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
    id: 2191,
    name: "Worm hole"
  }
export const WormHole = Item.fromJson(WormHoleData);
