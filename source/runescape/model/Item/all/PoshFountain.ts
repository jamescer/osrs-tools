import { Item } from "../Item";

const PoshFountainData = {
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
    id: 8195,
    name: "Posh fountain"
  }
export const PoshFountain = Item.fromJson(PoshFountainData);
