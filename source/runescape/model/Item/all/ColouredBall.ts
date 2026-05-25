import { Item } from "../Item";

const ColouredBallData = {{
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
    id: 10874,
    name: "Coloured ball"
  }
export const ColouredBall = Item.fromJson(ColouredBallData);