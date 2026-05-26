import { Item } from "../Item";

const SoulWarsGuideData = {
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
    id: 25197,
    name: "Soul wars guide"
  }
export const SoulWarsGuide = Item.fromJson(SoulWarsGuideData);
