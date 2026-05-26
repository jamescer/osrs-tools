import { Item } from "../Item";

const PotOfFlourData = {
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
    id: 1933,
    name: "Pot of flour"
  }
export const PotOfFlour = Item.fromJson(PotOfFlourData);
