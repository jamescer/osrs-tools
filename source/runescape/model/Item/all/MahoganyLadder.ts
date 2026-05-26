import { Item } from "../Item";

const MahoganyLadderData = {
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
    id: 8308,
    name: "Mahogany ladder"
  }
export const MahoganyLadder = Item.fromJson(MahoganyLadderData);
