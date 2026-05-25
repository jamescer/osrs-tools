import { Item } from "../Item";

const SpookyEggData = {{
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
    id: 27491,
    name: "Spooky egg"
  }
export const SpookyEgg = Item.fromJson(SpookyEggData);