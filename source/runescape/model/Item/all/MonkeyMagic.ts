import { Item } from "../Item";

const MonkeyMagicData = {{
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
    id: 4010,
    name: "Monkey magic"
  }
export const MonkeyMagic = Item.fromJson(MonkeyMagicData);