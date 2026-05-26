import { Item } from "../Item";

const BlueGoblinMailData = {
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
    id: 287,
    name: "Blue goblin mail"
  }
export const BlueGoblinMail = Item.fromJson(BlueGoblinMailData);
