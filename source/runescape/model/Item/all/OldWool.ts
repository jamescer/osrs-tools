import { Item } from "../Item";

const OldWoolData = {
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
    id: 27494,
    name: "Old wool"
  }
export const OldWool = Item.fromJson(OldWoolData);
