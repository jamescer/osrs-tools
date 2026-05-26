import { Item } from "../Item";

const SelectedIronData = {
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
    id: 10488,
    name: "Selected iron"
  }
export const SelectedIron = Item.fromJson(SelectedIronData);
