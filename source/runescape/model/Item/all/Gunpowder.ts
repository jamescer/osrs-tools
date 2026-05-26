import { Item } from "../Item";

const GunpowderData = {
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
    id: 7108,
    name: "Gunpowder"
  }
export const Gunpowder = Item.fromJson(GunpowderData);
