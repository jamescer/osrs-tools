import { Item } from "../Item";

const TheShadowRealmData = {
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
    id: 22510,
    name: "The shadow realm"
  }
export const TheShadowRealm = Item.fromJson(TheShadowRealmData);
