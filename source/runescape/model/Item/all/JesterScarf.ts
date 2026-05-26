import { Item } from "../Item";

const JesterScarfData = {
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
    id: 6859,
    name: "Jester scarf"
  }
export const JesterScarf = Item.fromJson(JesterScarfData);
