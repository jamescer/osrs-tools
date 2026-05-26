import { Item } from "../Item";

const FakeBeardData = {
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
    id: 4593,
    name: "Fake beard"
  }
export const FakeBeard = Item.fromJson(FakeBeardData);
