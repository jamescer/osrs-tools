import { Item } from "../Item";

const AncientCasketData = {
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
    id: 23071,
    name: "Ancient casket"
  }
export const AncientCasket = Item.fromJson(AncientCasketData);
