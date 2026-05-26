import { Item } from "../Item";

const SeedBoxopenData = {
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
    id: 24482,
    name: "Seed box#Open"
  }
export const SeedBoxopen = Item.fromJson(SeedBoxopenData);
