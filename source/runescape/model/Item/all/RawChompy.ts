import { Item } from "../Item";

const RawChompyData = {{
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
    id: 2876,
    name: "Raw chompy"
  }
export const RawChompy = Item.fromJson(RawChompyData);