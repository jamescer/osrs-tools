import { Item } from "../Item";

const CompOgreBowData = {
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
    id: 4827,
    name: "Comp ogre bow"
  }
export const CompOgreBow = Item.fromJson(CompOgreBowData);
