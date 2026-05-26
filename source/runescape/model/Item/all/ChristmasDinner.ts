import { Item } from "../Item";

const ChristmasDinnerData = {
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
    id: 32934,
    name: "Christmas dinner"
  }
export const ChristmasDinner = Item.fromJson(ChristmasDinnerData);
