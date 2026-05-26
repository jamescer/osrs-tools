import { Item } from "../Item";

const PentamidData = {
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
    id: 6901,
    name: "Pentamid"
  }
export const Pentamid = Item.fromJson(PentamidData);
