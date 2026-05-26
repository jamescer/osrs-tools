import { Item } from "../Item";

const KebabMixData = {
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
    id: 1881,
    name: "Kebab mix"
  }
export const KebabMix = Item.fromJson(KebabMixData);
