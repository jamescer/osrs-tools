import { Item } from "../Item";

const ServeryPotatoData = {
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
    id: 13414,
    name: "Servery potato"
  }
export const ServeryPotato = Item.fromJson(ServeryPotatoData);
