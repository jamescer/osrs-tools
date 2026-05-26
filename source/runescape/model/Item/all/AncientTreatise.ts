import { Item } from "../Item";

const AncientTreatiseData = {
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
    id: 25692,
    name: "Ancient treatise"
  }
export const AncientTreatise = Item.fromJson(AncientTreatiseData);
