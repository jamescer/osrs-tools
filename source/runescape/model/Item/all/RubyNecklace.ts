import { Item } from "../Item";

const RubyNecklaceData = {
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
    id: 1660,
    name: "Ruby necklace"
  }
export const RubyNecklace = Item.fromJson(RubyNecklaceData);
