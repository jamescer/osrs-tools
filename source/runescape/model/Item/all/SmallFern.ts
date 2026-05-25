import { Item } from "../Item";

const SmallFernData = {{
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
    id: 8181,
    name: "Small fern"
  }
export const SmallFern = Item.fromJson(SmallFernData);