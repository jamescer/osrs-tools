import { Item } from "../Item";

const KhazardArmourData = {{
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
    id: 75,
    name: "Khazard armour"
  }
export const KhazardArmour = Item.fromJson(KhazardArmourData);