import { Item } from "../Item";

const CrystalBodyAttunedData = {
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
    id: 23890,
    name: "Crystal body (attuned)"
  }
export const CrystalBodyAttuned = Item.fromJson(CrystalBodyAttunedData);
