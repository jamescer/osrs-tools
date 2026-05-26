import { Item } from "../Item";

const CapturedWindMoteData = {
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
    id: 31745,
    name: "Captured wind mote"
  }
export const CapturedWindMote = Item.fromJson(CapturedWindMoteData);
