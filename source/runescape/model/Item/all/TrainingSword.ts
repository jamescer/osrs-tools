import { Item } from "../Item";

const TrainingSwordData = {
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
    id: 9703,
    name: "Training sword"
  }
export const TrainingSword = Item.fromJson(TrainingSwordData);
