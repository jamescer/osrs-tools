import { Item } from "../Item";

const MoonclanArmourData = {
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
    id: 9070,
    name: "Moonclan armour"
  }
export const MoonclanArmour = Item.fromJson(MoonclanArmourData);
