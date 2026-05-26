import { Item } from "../Item";

const FreshChocolateMixData = {
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
    id: 21229,
    name: "Fresh chocolate mix"
  }
export const FreshChocolateMix = Item.fromJson(FreshChocolateMixData);
