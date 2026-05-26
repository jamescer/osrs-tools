import { Item } from "../Item";

const PhasmatysFlagData = {
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
    id: 8971,
    name: "Phasmatys flag"
  }
export const PhasmatysFlag = Item.fromJson(PhasmatysFlagData);
