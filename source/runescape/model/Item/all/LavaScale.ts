import { Item } from "../Item";

const LavaScaleData = {
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
    id: 11992,
    name: "Lava scale"
  }
export const LavaScale = Item.fromJson(LavaScaleData);
