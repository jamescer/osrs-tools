import { Item } from "../Item";

const DragonstoneKeyData = {
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
    id: 28420,
    name: "Dragonstone key"
  }
export const DragonstoneKey = Item.fromJson(DragonstoneKeyData);
