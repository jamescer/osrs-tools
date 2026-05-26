import { Item } from "../Item";

const ToxicNaphthaData = {
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
    id: 6096,
    name: "Toxic naphtha"
  }
export const ToxicNaphtha = Item.fromJson(ToxicNaphthaData);
