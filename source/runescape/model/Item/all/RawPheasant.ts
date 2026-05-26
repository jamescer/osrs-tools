import { Item } from "../Item";

const RawPheasantData = {
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
    id: 11704,
    name: "Raw pheasant"
  }
export const RawPheasant = Item.fromJson(RawPheasantData);
