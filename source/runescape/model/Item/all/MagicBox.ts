import { Item } from "../Item";

const MagicBoxData = {
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
    id: 10025,
    name: "Magic box"
  }
export const MagicBox = Item.fromJson(MagicBoxData);
