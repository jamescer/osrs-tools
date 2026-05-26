import { Item } from "../Item";

const GnomeQuestLampData = {
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
    id: 28553,
    name: "Gnome quest lamp"
  }
export const GnomeQuestLamp = Item.fromJson(GnomeQuestLampData);
