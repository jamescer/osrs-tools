import { Item } from "../Item";

const MonkeyTailData = {
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
    id: 19610,
    name: "Monkey tail"
  }
export const MonkeyTail = Item.fromJson(MonkeyTailData);
