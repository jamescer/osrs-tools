import { Item } from "../Item";

const PheasantPetData = {
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
    id: 28669,
    name: "Pheasant (pet)"
  }
export const PheasantPet = Item.fromJson(PheasantPetData);
