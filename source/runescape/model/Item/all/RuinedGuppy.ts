import { Item } from "../Item";

const RuinedGuppyData = {
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
    id: 25656,
    name: "Ruined guppy"
  }
export const RuinedGuppy = Item.fromJson(RuinedGuppyData);
