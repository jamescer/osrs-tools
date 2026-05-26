import { Item } from "../Item";

const CrystalHalberdBasicData = {
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
    id: 23895,
    name: "Crystal halberd (basic)"
  }
export const CrystalHalberdBasic = Item.fromJson(CrystalHalberdBasicData);
