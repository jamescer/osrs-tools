import { Item } from "../Item";

const BurntMonkfishData = {
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
    id: 7948,
    name: "Burnt monkfish"
  }
export const BurntMonkfish = Item.fromJson(BurntMonkfishData);
