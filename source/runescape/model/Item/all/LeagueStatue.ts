import { Item } from "../Item";

const LeagueStatueData = {
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
    id: 25359,
    name: "League statue"
  }
export const LeagueStatue = Item.fromJson(LeagueStatueData);
