import { Item } from "../Item";

const FernSmallPlantData = {
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
    id: 8182,
    name: "Fern (small plant)"
  }
export const FernSmallPlant = Item.fromJson(FernSmallPlantData);
