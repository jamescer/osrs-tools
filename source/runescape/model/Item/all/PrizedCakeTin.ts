import { Item } from "../Item";

const PrizedCakeTinData = {
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
    id: 27795,
    name: "Prized cake tin"
  }
export const PrizedCakeTin = Item.fromJson(PrizedCakeTinData);
