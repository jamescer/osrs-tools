import { Item } from "../Item";

const EmeraldBraceletData = {
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
    id: 11076,
    name: "Emerald bracelet"
  }
export const EmeraldBracelet = Item.fromJson(EmeraldBraceletData);
