import { Item } from "../Item";

const PurpleBootsData = {
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
    id: 2934,
    name: "Purple boots"
  }
export const PurpleBoots = Item.fromJson(PurpleBootsData);
