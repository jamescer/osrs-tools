import { Item } from "../Item";

const BitternutData = {
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
    id: 8976,
    name: "Bitternut"
  }
export const Bitternut = Item.fromJson(BitternutData);
