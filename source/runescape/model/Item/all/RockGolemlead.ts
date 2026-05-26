import { Item } from "../Item";

const RockGolemleadData = {
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
    id: 31276,
    name: "Rock golem#Lead"
  }
export const RockGolemlead = Item.fromJson(RockGolemleadData);
