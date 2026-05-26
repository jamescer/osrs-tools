import { Item } from "../Item";

const KharidianQuestLampData = {
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
    id: 33004,
    name: "Kharidian quest lamp"
  }
export const KharidianQuestLamp = Item.fromJson(KharidianQuestLampData);
