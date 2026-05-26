import { Item } from "../Item";

const PetGeneralGraardorData = {
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
    id: 12650,
    name: "Pet general graardor"
  }
export const PetGeneralGraardor = Item.fromJson(PetGeneralGraardorData);
