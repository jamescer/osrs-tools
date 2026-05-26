import { Item } from "../Item";

const MagicEggBallData = {
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
    id: 24535,
    name: "Magic egg ball"
  }
export const MagicEggBall = Item.fromJson(MagicEggBallData);
