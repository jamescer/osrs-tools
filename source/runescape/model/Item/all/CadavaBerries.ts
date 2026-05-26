import { Item } from "../Item";

const CadavaBerriesData = {
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
    id: 753,
    name: "Cadava berries"
  }
export const CadavaBerries = Item.fromJson(CadavaBerriesData);
