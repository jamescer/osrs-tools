import { Item } from "../Item";

const MonkeyBonemealData = {
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
    id: 4267,
    name: "Monkey bonemeal"
  }
export const MonkeyBonemeal = Item.fromJson(MonkeyBonemealData);
