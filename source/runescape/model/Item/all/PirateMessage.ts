import { Item } from "../Item";

const PirateMessageData = {{
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
    id: 433,
    name: "Pirate message"
  }
export const PirateMessage = Item.fromJson(PirateMessageData);