import { Item } from "../Item";

const AncientRemnantData = {
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
    id: 27381,
    name: "Ancient remnant"
  }
export const AncientRemnant = Item.fromJson(AncientRemnantData);
