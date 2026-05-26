import { Item } from "../Item";

const DemonicTallowData = {
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
    id: 30800,
    name: "Demonic tallow"
  }
export const DemonicTallow = Item.fromJson(DemonicTallowData);
