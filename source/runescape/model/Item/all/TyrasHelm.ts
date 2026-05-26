import { Item } from "../Item";

const TyrasHelmData = {
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
    id: 9629,
    name: "Tyras helm"
  }
export const TyrasHelm = Item.fromJson(TyrasHelmData);
