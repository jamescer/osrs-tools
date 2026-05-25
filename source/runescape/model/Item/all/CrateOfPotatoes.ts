import { Item } from "../Item";

const CrateOfPotatoesData = {{
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
    id: 32495,
    name: "Crate of potatoes"
  }
export const CrateOfPotatoes = Item.fromJson(CrateOfPotatoesData);