import { Item } from "../Item";

const BallOfWoolData = {{
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
    id: 1759,
    name: "Ball of wool"
  }
export const BallOfWool = Item.fromJson(BallOfWoolData);