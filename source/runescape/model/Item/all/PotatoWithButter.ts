import { Item } from "../Item";

const PotatoWithButterData = {
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
    id: 6703,
    name: "Potato with butter"
  }
export const PotatoWithButter = Item.fromJson(PotatoWithButterData);
