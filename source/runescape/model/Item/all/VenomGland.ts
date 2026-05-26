import { Item } from "../Item";

const VenomGlandData = {
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
    id: 24255,
    name: "Venom gland"
  }
export const VenomGland = Item.fromJson(VenomGlandData);
