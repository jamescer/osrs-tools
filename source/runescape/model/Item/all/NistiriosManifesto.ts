import { Item } from "../Item";

const NistiriosManifestoData = {
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
    id: 20888,
    name: "Nistirio's manifesto"
  }
export const NistiriosManifesto = Item.fromJson(NistiriosManifestoData);
