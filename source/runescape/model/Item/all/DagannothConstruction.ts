import { Item } from "../Item";

const DagannothConstructionData = {
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
    id: 8141,
    name: "Dagannoth (Construction)"
  }
export const DagannothConstruction = Item.fromJson(DagannothConstructionData);
