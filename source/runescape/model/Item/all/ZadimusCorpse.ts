import { Item } from "../Item";

const ZadimusCorpseData = {
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
    id: 610,
    name: "Zadimus corpse"
  }
export const ZadimusCorpse = Item.fromJson(ZadimusCorpseData);
