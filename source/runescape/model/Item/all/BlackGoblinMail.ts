import { Item } from "../Item";

const BlackGoblinMailData = {
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
    id: 9055,
    name: "Black goblin mail"
  }
export const BlackGoblinMail = Item.fromJson(BlackGoblinMailData);
