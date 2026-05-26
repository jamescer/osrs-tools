import { Item } from "../Item";

const SafetyGuaranteeData = {
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
    id: 4484,
    name: "Safety guarantee"
  }
export const SafetyGuarantee = Item.fromJson(SafetyGuaranteeData);
