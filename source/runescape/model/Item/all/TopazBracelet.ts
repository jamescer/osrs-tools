import { Item } from "../Item";

const TopazBraceletData = {
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
    id: 21123,
    name: "Topaz bracelet"
  }
export const TopazBracelet = Item.fromJson(TopazBraceletData);
