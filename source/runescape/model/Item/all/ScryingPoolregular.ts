import { Item } from "../Item";

const ScryingPoolregularData = {
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
    id: 8333,
    name: "Scrying pool#Regular"
  }
export const ScryingPoolregular = Item.fromJson(ScryingPoolregularData);
