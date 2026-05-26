import { Item } from "../Item";

const KaramjanRumData = {
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
    id: 431,
    name: "Karamjan rum"
  }
export const KaramjanRum = Item.fromJson(KaramjanRumData);
