import { Item } from "../Item";

const JadeNecklaceData = {
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
    id: 21093,
    name: "Jade necklace"
  }
export const JadeNecklace = Item.fromJson(JadeNecklaceData);
