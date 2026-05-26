import { Item } from "../Item";

const FrogleatherBodyData = {
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
    id: 10954,
    name: "Frog-leather body"
  }
export const FrogleatherBody = Item.fromJson(FrogleatherBodyData);
