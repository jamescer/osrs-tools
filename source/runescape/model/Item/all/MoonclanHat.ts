import { Item } from "../Item";

const MoonclanHatData = {
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
    id: 9069,
    name: "Moonclan hat"
  }
export const MoonclanHat = Item.fromJson(MoonclanHatData);
