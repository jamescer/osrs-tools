import { Item } from "../Item";

const SpicyMaggotsData = {
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
    id: 7513,
    name: "Spicy maggots"
  }
export const SpicyMaggots = Item.fromJson(SpicyMaggotsData);
