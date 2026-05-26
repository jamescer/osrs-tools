import { Item } from "../Item";

const YoyoData = {
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
    id: 4079,
    name: "Yo-yo"
  }
export const Yoyo = Item.fromJson(YoyoData);
