import { Item } from "../Item";

const RingOfPursuitData = {
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
    id: 21126,
    name: "Ring of pursuit"
  }
export const RingOfPursuit = Item.fromJson(RingOfPursuitData);
