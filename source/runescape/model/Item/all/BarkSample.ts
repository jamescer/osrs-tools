import { Item } from "../Item";

const BarkSampleData = {{
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
    id: 783,
    name: "Bark sample"
  }
export const BarkSample = Item.fromJson(BarkSampleData);