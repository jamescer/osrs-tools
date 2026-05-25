import { Item } from "../Item";

const WolfWhistleData = {{
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
    id: 10896,
    name: "Wolf whistle"
  }
export const WolfWhistle = Item.fromJson(WolfWhistleData);