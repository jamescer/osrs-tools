import { Item } from "../Item";

const AmuletOfTortureData = {
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
    id: 19553,
    name: "Amulet of torture"
  }
export const AmuletOfTorture = Item.fromJson(AmuletOfTortureData);
