import { Item } from "../Item";

const QuestListConstructionData = {
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
    id: 20633,
    name: "Quest list (Construction)"
  }
export const QuestListConstruction = Item.fromJson(QuestListConstructionData);
