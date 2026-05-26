import { Item } from "../Item";

const DinhsHammerData = {
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
    id: 22761,
    name: "Dinh's hammer"
  }
export const DinhsHammer = Item.fromJson(DinhsHammerData);
