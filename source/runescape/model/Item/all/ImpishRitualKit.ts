import { Item } from "../Item";

const ImpishRitualKitData = {
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
    id: 33359,
    name: "Impish ritual kit"
  }
export const ImpishRitualKit = Item.fromJson(ImpishRitualKitData);
