import { Item } from "../Item";

const SinkinUseData = {
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
    id: 8232,
    name: "Sink#In use"
  }
export const SinkinUse = Item.fromJson(SinkinUseData);
