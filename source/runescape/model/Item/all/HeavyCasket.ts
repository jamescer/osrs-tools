import { Item } from "../Item";

const HeavyCasketData = {
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
    id: 19941,
    name: "Heavy casket"
  }
export const HeavyCasket = Item.fromJson(HeavyCasketData);
