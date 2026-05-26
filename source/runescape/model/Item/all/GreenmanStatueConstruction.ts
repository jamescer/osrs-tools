import { Item } from "../Item";

const GreenmanStatueConstructionData = {
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
    id: 31031,
    name: "Greenman statue (Construction)"
  }
export const GreenmanStatueConstruction = Item.fromJson(GreenmanStatueConstructionData);
