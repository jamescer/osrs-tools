import { Item } from "../Item";

const EchoPearlData = {
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
    id: 31946,
    name: "Echo pearl"
  }
export const EchoPearl = Item.fromJson(EchoPearlData);
