import { Item } from "../Item";

const IorwerthsMessageData = {
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
    id: 3207,
    name: "Iorwerth's message"
  }
export const IorwerthsMessage = Item.fromJson(IorwerthsMessageData);
