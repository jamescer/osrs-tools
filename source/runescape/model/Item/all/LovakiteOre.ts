import { Item } from "../Item";

const LovakiteOreData = {
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
    id: 13356,
    name: "Lovakite ore"
  }
export const LovakiteOre = Item.fromJson(LovakiteOreData);
