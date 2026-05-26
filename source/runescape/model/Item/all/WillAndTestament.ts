import { Item } from "../Item";

const WillAndTestamentData = {
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
    id: 12838,
    name: "Will and testament"
  }
export const WillAndTestament = Item.fromJson(WillAndTestamentData);
