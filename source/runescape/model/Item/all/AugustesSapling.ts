import { Item } from "../Item";

const AugustesSaplingData = {
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
    id: 9932,
    name: "Auguste's sapling"
  }
export const AugustesSapling = Item.fromJson(AugustesSaplingData);
