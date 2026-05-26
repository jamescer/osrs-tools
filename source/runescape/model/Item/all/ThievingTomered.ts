import { Item } from "../Item";

const ThievingTomeredData = {
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
    id: 7787,
    name: "Thieving tome#Red"
  }
export const ThievingTomered = Item.fromJson(ThievingTomeredData);
