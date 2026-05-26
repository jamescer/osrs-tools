import { Item } from "../Item";

const DawnbringerData = {
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
    id: 22516,
    name: "Dawnbringer"
  }
export const Dawnbringer = Item.fromJson(DawnbringerData);
