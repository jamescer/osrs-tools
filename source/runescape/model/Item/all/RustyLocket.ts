import { Item } from "../Item";

const RustyLocketData = {
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
    id: 32863,
    name: "Rusty locket"
  }
export const RustyLocket = Item.fromJson(RustyLocketData);
