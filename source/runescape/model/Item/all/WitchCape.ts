import { Item } from "../Item";

const WitchCapeData = {
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
    id: 27481,
    name: "Witch cape"
  }
export const WitchCape = Item.fromJson(WitchCapeData);
