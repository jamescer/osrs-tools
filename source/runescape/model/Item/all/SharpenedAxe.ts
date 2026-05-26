import { Item } from "../Item";

const SharpenedAxeData = {
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
    id: 4444,
    name: "Sharpened axe"
  }
export const SharpenedAxe = Item.fromJson(SharpenedAxeData);
