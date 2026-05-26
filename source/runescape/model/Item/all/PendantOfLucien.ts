import { Item } from "../Item";

const PendantOfLucienData = {
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
    id: 86,
    name: "Pendant of lucien"
  }
export const PendantOfLucien = Item.fromJson(PendantOfLucienData);
