import { Item } from "../Item";

const FossilisedDungData = {
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
    id: 27216,
    name: "Fossilised dung"
  }
export const FossilisedDung = Item.fromJson(FossilisedDungData);
