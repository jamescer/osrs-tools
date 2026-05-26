import { Item } from "../Item";

const ChampionsLampData = {
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
    id: 22320,
    name: "Champion's lamp"
  }
export const ChampionsLamp = Item.fromJson(ChampionsLampData);
