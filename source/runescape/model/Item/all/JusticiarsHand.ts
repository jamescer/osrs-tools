import { Item } from "../Item";

const JusticiarsHandData = {
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
    id: 21797,
    name: "Justiciar's hand"
  }
export const JusticiarsHand = Item.fromJson(JusticiarsHandData);
