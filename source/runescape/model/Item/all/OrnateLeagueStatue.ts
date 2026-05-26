import { Item } from "../Item";

const OrnateLeagueStatueData = {
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
    id: 25360,
    name: "Ornate league statue"
  }
export const OrnateLeagueStatue = Item.fromJson(OrnateLeagueStatueData);
