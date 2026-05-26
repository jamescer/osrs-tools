import { Item } from "../Item";

const ClimbingBootsData = {
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
    id: 3105,
    name: "Climbing boots"
  }
export const ClimbingBoots = Item.fromJson(ClimbingBootsData);
