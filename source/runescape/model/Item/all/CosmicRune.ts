import { Item } from "../Item";

const CosmicRuneData = {{
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
    id: 564,
    name: "Cosmic rune"
  }
export const CosmicRune = Item.fromJson(CosmicRuneData);