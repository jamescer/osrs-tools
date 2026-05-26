import { Item } from "../Item";

const GraniteGlovesData = {
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
    id: 21736,
    name: "Granite gloves"
  }
export const GraniteGloves = Item.fromJson(GraniteGlovesData);
