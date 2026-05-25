import { Item } from "../Item";

const HarralanderData = {{
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
    id: 255,
    name: "Harralander"
  }
export const Harralander = Item.fromJson(HarralanderData);