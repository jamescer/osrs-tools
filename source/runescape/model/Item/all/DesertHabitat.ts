import { Item } from "../Item";

const DesertHabitatData = {
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
    id: 12712,
    name: "Desert habitat"
  }
export const DesertHabitat = Item.fromJson(DesertHabitatData);
