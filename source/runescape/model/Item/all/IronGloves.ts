import { Item } from "../Item";

const IronGlovesData = {
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
    id: 7455,
    name: "Iron gloves"
  }
export const IronGloves = Item.fromJson(IronGlovesData);
