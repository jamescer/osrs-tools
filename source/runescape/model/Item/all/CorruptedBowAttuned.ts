import { Item } from "../Item";

const CorruptedBowAttunedData = {
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
    id: 23856,
    name: "Corrupted bow (attuned)"
  }
export const CorruptedBowAttuned = Item.fromJson(CorruptedBowAttunedData);
