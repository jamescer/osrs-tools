import { Item } from "../Item";

const LitStrangeObjectData = {
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
    id: 3714,
    name: "Lit strange object"
  }
export const LitStrangeObject = Item.fromJson(LitStrangeObjectData);
