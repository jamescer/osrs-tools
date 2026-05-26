import { Item } from "../Item";

const HillGiantClubData = {
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
    id: 20756,
    name: "Hill giant club"
  }
export const HillGiantClub = Item.fromJson(HillGiantClubData);
