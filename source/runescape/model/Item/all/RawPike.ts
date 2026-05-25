import { Item } from "../Item";

const RawPikeData = {{
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
    id: 349,
    name: "Raw pike"
  }
export const RawPike = Item.fromJson(RawPikeData);