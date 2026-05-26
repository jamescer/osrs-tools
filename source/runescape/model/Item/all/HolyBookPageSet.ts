import { Item } from "../Item";

const HolyBookPageSetData = {
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
    id: 13149,
    name: "Holy book page set"
  }
export const HolyBookPageSet = Item.fromJson(HolyBookPageSetData);
