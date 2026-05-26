import { Item } from "../Item";

const RuneMedHelmData = {
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
    id: 1147,
    name: "Rune med helm"
  }
export const RuneMedHelm = Item.fromJson(RuneMedHelmData);
