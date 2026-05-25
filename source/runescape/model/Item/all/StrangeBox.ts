import { Item } from "../Item";

const StrangeBoxData = {{
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
    id: 3062,
    name: "Strange box"
  }
export const StrangeBox = Item.fromJson(StrangeBoxData);