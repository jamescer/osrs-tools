import { Item } from "../Item";

const BallOfCottonData = {
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
    id: 31454,
    name: "Ball of cotton"
  }
export const BallOfCotton = Item.fromJson(BallOfCottonData);
