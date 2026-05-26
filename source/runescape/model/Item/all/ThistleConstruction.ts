import { Item } from "../Item";

const ThistleConstructionData = {
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
    id: 8184,
    name: "Thistle (Construction)"
  }
export const ThistleConstruction = Item.fromJson(ThistleConstructionData);
