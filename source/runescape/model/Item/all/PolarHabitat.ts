import { Item } from "../Item";

const PolarHabitatData = {
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
    id: 12713,
    name: "Polar habitat"
  }
export const PolarHabitat = Item.fromJson(PolarHabitatData);
