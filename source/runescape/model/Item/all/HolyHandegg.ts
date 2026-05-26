import { Item } from "../Item";

const HolyHandeggData = {
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
    id: 22355,
    name: "Holy handegg"
  }
export const HolyHandegg = Item.fromJson(HolyHandeggData);
