import { Item } from "../Item";

const AJesterStickData = {
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
    id: 10840,
    name: "A jester stick"
  }
export const AJesterStick = Item.fromJson(AJesterStickData);
