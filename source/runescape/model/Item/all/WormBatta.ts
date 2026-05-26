import { Item } from "../Item";

const WormBattaData = {
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
    id: 2253,
    name: "Worm batta"
  }
export const WormBatta = Item.fromJson(WormBattaData);
