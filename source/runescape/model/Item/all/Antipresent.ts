import { Item } from "../Item";

const AntipresentData = {
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
    id: 13345,
    name: "Anti-present"
  }
export const Antipresent = Item.fromJson(AntipresentData);
