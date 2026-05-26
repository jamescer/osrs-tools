import { Item } from "../Item";

const CleanFullHelmData = {
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
    id: 26290,
    name: "Clean full helm"
  }
export const CleanFullHelm = Item.fromJson(CleanFullHelmData);
