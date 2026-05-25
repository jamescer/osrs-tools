import { Item } from "../Item";

const PlagueSampleData = {{
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
    id: 418,
    name: "Plague sample"
  }
export const PlagueSample = Item.fromJson(PlagueSampleData);