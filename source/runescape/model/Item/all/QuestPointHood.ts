import { Item } from "../Item";

const QuestPointHoodData = {
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
    id: 9814,
    name: "Quest point hood"
  }
export const QuestPointHood = Item.fromJson(QuestPointHoodData);
