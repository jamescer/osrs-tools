import { Item } from "../Item";

const RoastFrogData = {
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
    id: 10967,
    name: "Roast frog"
  }
export const RoastFrog = Item.fromJson(RoastFrogData);
