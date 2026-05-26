import { Item } from "../Item";

const LightbearerData = {
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
    id: 25975,
    name: "Lightbearer"
  }
export const Lightbearer = Item.fromJson(LightbearerData);
