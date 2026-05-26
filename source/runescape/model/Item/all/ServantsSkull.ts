import { Item } from "../Item";

const ServantsSkullData = {
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
    id: 12840,
    name: "Servant's skull"
  }
export const ServantsSkull = Item.fromJson(ServantsSkullData);
