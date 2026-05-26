import { Item } from "../Item";

const CrateOfMithrilOreData = {
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
    id: 32701,
    name: "Crate of mithril ore"
  }
export const CrateOfMithrilOre = Item.fromJson(CrateOfMithrilOreData);
