import { Item } from "../Item";

const BronzeWarhammerData = {
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
    id: 1337,
    name: "Bronze warhammer"
  }
export const BronzeWarhammer = Item.fromJson(BronzeWarhammerData);
