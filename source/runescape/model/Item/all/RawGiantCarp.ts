import { Item } from "../Item";

const RawGiantCarpData = {
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
    id: 338,
    name: "Raw giant carp"
  }
export const RawGiantCarp = Item.fromJson(RawGiantCarpData);
