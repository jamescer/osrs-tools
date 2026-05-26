import { Item } from "../Item";

const CrystalHelmAttunedData = {
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
    id: 23887,
    name: "Crystal helm (attuned)"
  }
export const CrystalHelmAttuned = Item.fromJson(CrystalHelmAttunedData);
