import { Item } from "../Item";

const SpookierGlovesData = {
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
    id: 24321,
    name: "Spookier gloves"
  }
export const SpookierGloves = Item.fromJson(SpookierGlovesData);
