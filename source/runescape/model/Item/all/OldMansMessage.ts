import { Item } from "../Item";

const OldMansMessageData = {{
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
    id: 5506,
    name: "Old man's message"
  }
export const OldMansMessage = Item.fromJson(OldMansMessageData);