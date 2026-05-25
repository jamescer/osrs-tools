import { Item } from "../Item";

const MonkeyBarData = {{
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
    id: 4014,
    name: "Monkey bar"
  }
export const MonkeyBar = Item.fromJson(MonkeyBarData);