import { Item } from "../Item";

const AmuletMouldData = {{
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
    id: 1595,
    name: "Amulet mould"
  }
export const AmuletMould = Item.fromJson(AmuletMouldData);