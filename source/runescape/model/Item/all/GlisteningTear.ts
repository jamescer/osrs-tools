import { Item } from "../Item";

const GlisteningTearData = {
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
    id: 22207,
    name: "Glistening tear"
  }
export const GlisteningTear = Item.fromJson(GlisteningTearData);
