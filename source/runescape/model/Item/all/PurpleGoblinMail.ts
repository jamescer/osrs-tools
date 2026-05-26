import { Item } from "../Item";

const PurpleGoblinMailData = {
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
    id: 9058,
    name: "Purple goblin mail"
  }
export const PurpleGoblinMail = Item.fromJson(PurpleGoblinMailData);
