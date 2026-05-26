import { Item } from "../Item";

const ReindeerHatData = {
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
    id: 10507,
    name: "Reindeer hat"
  }
export const ReindeerHat = Item.fromJson(ReindeerHatData);
