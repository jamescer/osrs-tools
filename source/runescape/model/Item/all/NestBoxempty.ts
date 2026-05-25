import { Item } from "../Item";

const NestBoxemptyData = {{
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
    id: 12792,
    name: "Nest box#Empty"
  }
export const NestBoxempty = Item.fromJson(NestBoxemptyData);