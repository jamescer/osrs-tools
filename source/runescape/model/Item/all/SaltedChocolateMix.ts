import { Item } from "../Item";

const SaltedChocolateMixData = {
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
    id: 21234,
    name: "Salted chocolate mix"
  }
export const SaltedChocolateMix = Item.fromJson(SaltedChocolateMixData);
