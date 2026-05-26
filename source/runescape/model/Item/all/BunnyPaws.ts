import { Item } from "../Item";

const BunnyPawsData = {
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
    id: 13665,
    name: "Bunny paws"
  }
export const BunnyPaws = Item.fromJson(BunnyPawsData);
