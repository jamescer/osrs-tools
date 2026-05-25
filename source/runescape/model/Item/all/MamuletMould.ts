import { Item } from "../Item";

const MamuletMouldData = {{
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
    id: 4020,
    name: "M'amulet mould"
  }
export const MamuletMould = Item.fromJson(MamuletMouldData);