import { Item } from "../Item";

const CorruptedHelmAttunedData = {
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
    id: 23841,
    name: "Corrupted helm (attuned)"
  }
export const CorruptedHelmAttuned = Item.fromJson(CorruptedHelmAttunedData);
