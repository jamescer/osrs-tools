import { Item } from "../Item";

const RockGolemtinData = {
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
    id: 21187,
    name: "Rock golem#Tin"
  }
export const RockGolemtin = Item.fromJson(RockGolemtinData);
