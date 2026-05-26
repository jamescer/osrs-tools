import { Item } from "../Item";

const MagicWhistleData = {
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
    id: 16,
    name: "Magic whistle"
  }
export const MagicWhistle = Item.fromJson(MagicWhistleData);
