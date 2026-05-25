import { Item } from "../Item";

const TelescopeDummyData = {{
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
    id: 4557,
    name: "Telescope dummy"
  }
export const TelescopeDummy = Item.fromJson(TelescopeDummyData);