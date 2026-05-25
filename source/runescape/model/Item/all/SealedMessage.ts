import { Item } from "../Item";

const SealedMessageData = {{
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
    id: 9653,
    name: "Sealed message"
  }
export const SealedMessage = Item.fromJson(SealedMessageData);