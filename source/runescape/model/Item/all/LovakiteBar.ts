import { Item } from "../Item";

const LovakiteBarData = {
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
    id: 13354,
    name: "Lovakite bar"
  }
export const LovakiteBar = Item.fromJson(LovakiteBarData);
