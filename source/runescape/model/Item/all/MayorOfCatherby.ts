import { Item } from "../Item";

const MayorOfCatherbyData = {
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
    id: 31331,
    name: "Mayor of catherby"
  }
export const MayorOfCatherby = Item.fromJson(MayorOfCatherbyData);
