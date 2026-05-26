import { Item } from "../Item";

const RockLimestoneData = {
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
    id: 968,
    name: "Rock (limestone)"
  }
export const RockLimestone = Item.fromJson(RockLimestoneData);
