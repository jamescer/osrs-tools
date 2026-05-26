import { Item } from "../Item";

const BlessedLampData = {
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
    id: 10889,
    name: "Blessed lamp"
  }
export const BlessedLamp = Item.fromJson(BlessedLampData);
