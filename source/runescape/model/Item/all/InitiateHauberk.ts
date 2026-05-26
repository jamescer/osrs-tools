import { Item } from "../Item";

const InitiateHauberkData = {
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
    id: 5575,
    name: "Initiate hauberk"
  }
export const InitiateHauberk = Item.fromJson(InitiateHauberkData);
