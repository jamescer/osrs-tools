import { Item } from "../Item";

const FiyrRemainsData = {
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
    id: 3404,
    name: "Fiyr remains"
  }
export const FiyrRemains = Item.fromJson(FiyrRemainsData);
