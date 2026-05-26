import { Item } from "../Item";

const ScorpionCageemptyData = {
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
    id: 456,
    name: "Scorpion cage#Empty"
  }
export const ScorpionCageempty = Item.fromJson(ScorpionCageemptyData);
