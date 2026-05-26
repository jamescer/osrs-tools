import { Item } from "../Item";

const RuinedHerbTeaData = {
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
    id: 4462,
    name: "Ruined herb tea"
  }
export const RuinedHerbTea = Item.fromJson(RuinedHerbTeaData);
