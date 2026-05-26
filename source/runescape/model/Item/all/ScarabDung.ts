import { Item } from "../Item";

const ScarabDungData = {
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
    id: 27214,
    name: "Scarab dung"
  }
export const ScarabDung = Item.fromJson(ScarabDungData);
