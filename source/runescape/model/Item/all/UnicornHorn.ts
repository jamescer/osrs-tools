import { Item } from "../Item";

const UnicornHornData = {
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
    id: 237,
    name: "Unicorn horn"
  }
export const UnicornHorn = Item.fromJson(UnicornHornData);
