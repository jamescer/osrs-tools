import { Item } from "../Item";

const KhaliBrewData = {{
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
    id: 77,
    name: "Khali brew"
  }
export const KhaliBrew = Item.fromJson(KhaliBrewData);