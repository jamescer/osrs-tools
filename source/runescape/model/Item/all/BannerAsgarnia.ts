import { Item } from "../Item";

const BannerAsgarniaData = {
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
    id: 8652,
    name: "Banner (Asgarnia)"
  }
export const BannerAsgarnia = Item.fromJson(BannerAsgarniaData);
