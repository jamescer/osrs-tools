import { Item } from "../Item";

const BannerVarrockData = {
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
    id: 8678,
    name: "Banner (Varrock)"
  }
export const BannerVarrock = Item.fromJson(BannerVarrockData);
