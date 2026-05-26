import { Item } from "../Item";

const HugePlantData = {
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
    id: 8191,
    name: "Huge plant"
  }
export const HugePlant = Item.fromJson(HugePlantData);
