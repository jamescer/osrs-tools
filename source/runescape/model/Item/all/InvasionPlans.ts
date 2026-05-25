import { Item } from "../Item";

const InvasionPlansData = {{
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
    id: 794,
    name: "Invasion plans"
  }
export const InvasionPlans = Item.fromJson(InvasionPlansData);