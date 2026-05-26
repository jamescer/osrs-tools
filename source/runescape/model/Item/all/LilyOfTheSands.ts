import { Item } from "../Item";

const LilyOfTheSandsData = {
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
    id: 27272,
    name: "Lily of the sands"
  }
export const LilyOfTheSands = Item.fromJson(LilyOfTheSandsData);
