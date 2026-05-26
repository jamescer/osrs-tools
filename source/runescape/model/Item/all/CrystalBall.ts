import { Item } from "../Item";

const CrystalBallData = {
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
    id: 8351,
    name: "Crystal ball"
  }
export const CrystalBall = Item.fromJson(CrystalBallData);
