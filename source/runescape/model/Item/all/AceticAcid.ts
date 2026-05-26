import { Item } from "../Item";

const AceticAcidData = {
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
    id: 5578,
    name: "Acetic acid"
  }
export const AceticAcid = Item.fromJson(AceticAcidData);
