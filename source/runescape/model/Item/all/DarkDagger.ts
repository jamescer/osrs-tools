import { Item } from "../Item";

const DarkDaggerData = {
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
    id: 746,
    name: "Dark dagger"
  }
export const DarkDagger = Item.fromJson(DarkDaggerData);
