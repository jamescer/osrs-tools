import { Item } from "../Item";

const BoltPouchData = {{
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
    id: 9433,
    name: "Bolt pouch"
  }
export const BoltPouch = Item.fromJson(BoltPouchData);