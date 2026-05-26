import { Item } from "../Item";

const ShimmeringPearlData = {
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
    id: 31791,
    name: "Shimmering pearl"
  }
export const ShimmeringPearl = Item.fromJson(ShimmeringPearlData);
