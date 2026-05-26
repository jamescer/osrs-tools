import { Item } from "../Item";

const HamGlovesData = {
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
    id: 4308,
    name: "Ham gloves"
  }
export const HamGloves = Item.fromJson(HamGlovesData);
