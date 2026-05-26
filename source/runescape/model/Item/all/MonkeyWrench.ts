import { Item } from "../Item";

const MonkeyWrenchData = {
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
    id: 4018,
    name: "Monkey wrench"
  }
export const MonkeyWrench = Item.fromJson(MonkeyWrenchData);
