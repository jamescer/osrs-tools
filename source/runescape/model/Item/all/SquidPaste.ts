import { Item } from "../Item";

const SquidPasteData = {
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
    id: 31569,
    name: "Squid paste"
  }
export const SquidPaste = Item.fromJson(SquidPasteData);
