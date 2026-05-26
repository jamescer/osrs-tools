import { Item } from "../Item";

const DodgyNecklaceData = {
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
    id: 21143,
    name: "Dodgy necklace"
  }
export const DodgyNecklace = Item.fromJson(DodgyNecklaceData);
