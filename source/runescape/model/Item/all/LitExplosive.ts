import { Item } from "../Item";

const LitExplosiveData = {
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
    id: 29573,
    name: "Lit explosive"
  }
export const LitExplosive = Item.fromJson(LitExplosiveData);
