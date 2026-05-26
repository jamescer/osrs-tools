import { Item } from "../Item";

const AsynRemainsData = {
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
    id: 3402,
    name: "Asyn remains"
  }
export const AsynRemains = Item.fromJson(AsynRemainsData);
