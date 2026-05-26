import { Item } from "../Item";

const BlueRobeTopData = {
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
    id: 640,
    name: "Blue robe top"
  }
export const BlueRobeTop = Item.fromJson(BlueRobeTopData);
