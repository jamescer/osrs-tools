import { Item } from "../Item";

const CleanPlatebodyData = {
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
    id: 26286,
    name: "Clean platebody"
  }
export const CleanPlatebody = Item.fromJson(CleanPlatebodyData);
