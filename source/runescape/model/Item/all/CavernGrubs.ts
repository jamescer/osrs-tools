import { Item } from "../Item";

const CavernGrubsData = {
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
    id: 20885,
    name: "Cavern grubs"
  }
export const CavernGrubs = Item.fromJson(CavernGrubsData);
