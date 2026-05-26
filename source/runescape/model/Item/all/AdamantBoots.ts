import { Item } from "../Item";

const AdamantBootsData = {
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
    id: 4129,
    name: "Adamant boots"
  }
export const AdamantBoots = Item.fromJson(AdamantBootsData);
