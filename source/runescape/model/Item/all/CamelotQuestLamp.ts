import { Item } from "../Item";

const CamelotQuestLampData = {
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
    id: 33008,
    name: "Camelot quest lamp"
  }
export const CamelotQuestLamp = Item.fromJson(CamelotQuestLampData);
