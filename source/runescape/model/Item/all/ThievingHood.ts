import { Item } from "../Item";

const ThievingHoodData = {{
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
    id: 9779,
    name: "Thieving hood"
  }
export const ThievingHood = Item.fromJson(ThievingHoodData);