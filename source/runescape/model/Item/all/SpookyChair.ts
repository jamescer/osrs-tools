import { Item } from "../Item";

const SpookyChairData = {
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
    id: 31225,
    name: "Spooky chair"
  }
export const SpookyChair = Item.fromJson(SpookyChairData);
