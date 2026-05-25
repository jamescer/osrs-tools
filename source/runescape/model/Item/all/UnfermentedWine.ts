import { Item } from "../Item";

const UnfermentedWineData = {{
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
    id: 1995,
    name: "Unfermented wine"
  }
export const UnfermentedWine = Item.fromJson(UnfermentedWineData);