import { Item } from "../Item";

const MithrilSwordData = {{
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
    id: 1285,
    name: "Mithril sword"
  }
export const MithrilSword = Item.fromJson(MithrilSwordData);