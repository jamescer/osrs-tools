import { Item } from "../Item";

const CiderBarrelData = {
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
    id: 8240,
    name: "Cider barrel"
  }
export const CiderBarrel = Item.fromJson(CiderBarrelData);
