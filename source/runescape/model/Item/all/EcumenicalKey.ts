import { Item } from "../Item";

const EcumenicalKeyData = {
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
    id: 11942,
    name: "Ecumenical key"
  }
export const EcumenicalKey = Item.fromJson(EcumenicalKeyData);
