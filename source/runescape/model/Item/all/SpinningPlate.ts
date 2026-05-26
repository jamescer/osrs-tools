import { Item } from "../Item";

const SpinningPlateData = {
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
    id: 4613,
    name: "Spinning plate"
  }
export const SpinningPlate = Item.fromJson(SpinningPlateData);
