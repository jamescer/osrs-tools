import { Item } from "../Item";

const MonkeyTalismanData = {{
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
    id: 4023,
    name: "Monkey talisman"
  }
export const MonkeyTalisman = Item.fromJson(MonkeyTalismanData);