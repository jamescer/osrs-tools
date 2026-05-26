import { Item } from "../Item";

const HuascaPotionUnfData = {
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
    id: 30100,
    name: "Huasca potion (unf)"
  }
export const HuascaPotionUnf = Item.fromJson(HuascaPotionUnfData);
