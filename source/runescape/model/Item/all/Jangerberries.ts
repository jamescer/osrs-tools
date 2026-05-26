import { Item } from "../Item";

const JangerberriesData = {
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
    id: 247,
    name: "Jangerberries"
  }
export const Jangerberries = Item.fromJson(JangerberriesData);
