import { Item } from "../Item";

const KaramjaPaintingData = {
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
    id: 8292,
    name: "Karamja (painting)"
  }
export const KaramjaPainting = Item.fromJson(KaramjaPaintingData);
