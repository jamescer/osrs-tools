import { Item } from "../Item";

const FakeBeakData = {
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
    id: 10172,
    name: "Fake beak"
  }
export const FakeBeak = Item.fromJson(FakeBeakData);
