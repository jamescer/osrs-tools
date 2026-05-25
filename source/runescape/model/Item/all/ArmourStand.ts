import { Item } from "../Item";

const ArmourStandData = {{
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
    id: 8391,
    name: "Armour stand"
  }
export const ArmourStand = Item.fromJson(ArmourStandData);