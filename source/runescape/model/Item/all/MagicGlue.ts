import { Item } from "../Item";

const MagicGlueData = {
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
    id: 9592,
    name: "Magic glue"
  }
export const MagicGlue = Item.fromJson(MagicGlueData);
