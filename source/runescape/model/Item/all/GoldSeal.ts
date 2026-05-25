import { Item } from "../Item";

const GoldSealData = {{
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
    id: 9040,
    name: "Gold seal"
  }
export const GoldSeal = Item.fromJson(GoldSealData);