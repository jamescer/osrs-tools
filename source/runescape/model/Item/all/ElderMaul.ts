import { Item } from "../Item";

const ElderMaulData = {{
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
    id: 21003,
    name: "Elder maul"
  }
export const ElderMaul = Item.fromJson(ElderMaulData);