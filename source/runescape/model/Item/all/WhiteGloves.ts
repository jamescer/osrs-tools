import { Item } from "../Item";

const WhiteGlovesData = {
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
    id: 6629,
    name: "White gloves"
  }
export const WhiteGloves = Item.fromJson(WhiteGlovesData);
