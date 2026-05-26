import { Item } from "../Item";

const MarbleAdventureLogData = {
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
    id: 20625,
    name: "Marble adventure log"
  }
export const MarbleAdventureLog = Item.fromJson(MarbleAdventureLogData);
