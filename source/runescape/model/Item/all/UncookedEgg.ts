import { Item } from "../Item";

const UncookedEggData = {{
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
    id: 7076,
    name: "Uncooked egg"
  }
export const UncookedEgg = Item.fromJson(UncookedEggData);