import { Item } from "../Item";

const GoblinMailData = {{
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
    id: 288,
    name: "Goblin mail"
  }
export const GoblinMail = Item.fromJson(GoblinMailData);