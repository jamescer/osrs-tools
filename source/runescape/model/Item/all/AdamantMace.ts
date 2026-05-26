import { Item } from "../Item";

const AdamantMaceData = {
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
    id: 1430,
    name: "Adamant mace"
  }
export const AdamantMace = Item.fromJson(AdamantMaceData);
