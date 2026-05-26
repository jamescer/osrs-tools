import { Item } from "../Item";

const PrimordialBootsData = {
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
    id: 13239,
    name: "Primordial boots"
  }
export const PrimordialBoots = Item.fromJson(PrimordialBootsData);
