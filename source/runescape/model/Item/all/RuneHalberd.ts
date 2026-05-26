import { Item } from "../Item";

const RuneHalberdData = {
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
    id: 3202,
    name: "Rune halberd"
  }
export const RuneHalberd = Item.fromJson(RuneHalberdData);
