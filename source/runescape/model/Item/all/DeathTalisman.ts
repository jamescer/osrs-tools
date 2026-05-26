import { Item } from "../Item";

const DeathTalismanData = {
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
    id: 1456,
    name: "Death talisman"
  }
export const DeathTalisman = Item.fromJson(DeathTalismanData);
