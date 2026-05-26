import { Item } from "../Item";

const BluntAxeData = {
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
    id: 4415,
    name: "Blunt axe"
  }
export const BluntAxe = Item.fromJson(BluntAxeData);
