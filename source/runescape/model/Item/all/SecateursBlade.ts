import { Item } from "../Item";

const SecateursBladeData = {
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
    id: 28159,
    name: "Secateurs blade"
  }
export const SecateursBlade = Item.fromJson(SecateursBladeData);
