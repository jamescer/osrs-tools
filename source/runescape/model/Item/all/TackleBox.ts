import { Item } from "../Item";

const TackleBoxData = {{
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
    id: 25580,
    name: "Tackle box"
  }
export const TackleBox = Item.fromJson(TackleBoxData);