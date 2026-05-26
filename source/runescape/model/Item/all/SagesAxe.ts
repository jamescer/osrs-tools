import { Item } from "../Item";

const SagesAxeData = {
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
    id: 28773,
    name: "Sage's axe"
  }
export const SagesAxe = Item.fromJson(SagesAxeData);
