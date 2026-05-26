import { Item } from "../Item";

const HolyTableNapkinData = {
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
    id: 15,
    name: "Holy table napkin"
  }
export const HolyTableNapkin = Item.fromJson(HolyTableNapkinData);
