import { Item } from "../Item";

const ForestersRationData = {
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
    id: 28157,
    name: "Forester's ration"
  }
export const ForestersRation = Item.fromJson(ForestersRationData);
