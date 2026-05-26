import { Item } from "../Item";

const GrandSeedPodData = {
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
    id: 9469,
    name: "Grand seed pod"
  }
export const GrandSeedPod = Item.fromJson(GrandSeedPodData);
