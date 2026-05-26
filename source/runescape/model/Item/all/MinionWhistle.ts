import { Item } from "../Item";

const MinionWhistleData = {
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
    id: 28769,
    name: "Minion whistle"
  }
export const MinionWhistle = Item.fromJson(MinionWhistleData);
