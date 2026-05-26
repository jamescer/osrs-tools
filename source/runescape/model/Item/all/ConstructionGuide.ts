import { Item } from "../Item";

const ConstructionGuideData = {
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
    id: 8463,
    name: "Construction guide"
  }
export const ConstructionGuide = Item.fromJson(ConstructionGuideData);
