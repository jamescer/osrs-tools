import { Item } from "../Item";

const GlobeFlatpackData = {
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
    id: 8630,
    name: "Globe (flatpack)"
  }
export const GlobeFlatpack = Item.fromJson(GlobeFlatpackData);
