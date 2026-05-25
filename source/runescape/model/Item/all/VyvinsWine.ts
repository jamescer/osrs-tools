import { Item } from "../Item";

const VyvinsWineData = {{
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
    id: 23106,
    name: "Vyvin's wine"
  }
export const VyvinsWine = Item.fromJson(VyvinsWineData);