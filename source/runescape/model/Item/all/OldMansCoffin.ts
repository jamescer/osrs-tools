import { Item } from "../Item";

const OldMansCoffinData = {
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
    id: 22588,
    name: "Old man's coffin"
  }
export const OldMansCoffin = Item.fromJson(OldMansCoffinData);
