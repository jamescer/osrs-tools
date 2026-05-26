import { Item } from "../Item";

const HallowedSackData = {
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
    id: 24946,
    name: "Hallowed sack"
  }
export const HallowedSack = Item.fromJson(HallowedSackData);
