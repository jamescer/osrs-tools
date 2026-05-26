import { Item } from "../Item";

const BurntPotatoData = {
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
    id: 6699,
    name: "Burnt potato"
  }
export const BurntPotato = Item.fromJson(BurntPotatoData);
