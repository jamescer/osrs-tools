import { Item } from "../Item";

const MysteriousMedallionData = {
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
    id: 31337,
    name: "Mysterious medallion"
  }
export const MysteriousMedallion = Item.fromJson(MysteriousMedallionData);
