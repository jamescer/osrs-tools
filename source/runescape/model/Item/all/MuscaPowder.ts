import { Item } from "../Item";

const MuscaPowderData = {
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
    id: 28342,
    name: "Musca powder"
  }
export const MuscaPowder = Item.fromJson(MuscaPowderData);
