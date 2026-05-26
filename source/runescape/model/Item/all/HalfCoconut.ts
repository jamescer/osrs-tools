import { Item } from "../Item";

const HalfCoconutData = {
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
    id: 5976,
    name: "Half coconut"
  }
export const HalfCoconut = Item.fromJson(HalfCoconutData);
