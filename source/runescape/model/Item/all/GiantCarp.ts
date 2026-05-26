import { Item } from "../Item";

const GiantCarpData = {
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
    id: 337,
    name: "Giant carp"
  }
export const GiantCarp = Item.fromJson(GiantCarpData);
