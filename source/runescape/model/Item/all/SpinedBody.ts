import { Item } from "../Item";

const SpinedBodyData = {
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
    id: 6133,
    name: "Spined body"
  }
export const SpinedBody = Item.fromJson(SpinedBodyData);
