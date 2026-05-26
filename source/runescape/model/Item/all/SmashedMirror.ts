import { Item } from "../Item";

const SmashedMirrorData = {
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
    id: 32870,
    name: "Smashed mirror"
  }
export const SmashedMirror = Item.fromJson(SmashedMirrorData);
