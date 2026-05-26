import { Item } from "../Item";

const GraniteHelmData = {
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
    id: 10589,
    name: "Granite helm"
  }
export const GraniteHelm = Item.fromJson(GraniteHelmData);
