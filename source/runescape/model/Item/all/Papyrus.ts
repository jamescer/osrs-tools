import { Item } from "../Item";

const PapyrusData = {{
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
    id: 970,
    name: "Papyrus"
  }
export const Papyrus = Item.fromJson(PapyrusData);