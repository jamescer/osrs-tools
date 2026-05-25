import { Item } from "../Item";

const ClueCompassItemData = {{
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
    id: 30363,
    name: "Clue compass (item)"
  }
export const ClueCompassItem = Item.fromJson(ClueCompassItemData);