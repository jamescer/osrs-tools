import { Item } from "../Item";

const PetChaosElementalData = {
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
    id: 11995,
    name: "Pet chaos elemental"
  }
export const PetChaosElemental = Item.fromJson(PetChaosElementalData);
