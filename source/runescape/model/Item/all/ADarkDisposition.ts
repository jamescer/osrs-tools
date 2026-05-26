import { Item } from "../Item";

const ADarkDispositionData = {
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
    id: 21770,
    name: "A dark disposition"
  }
export const ADarkDisposition = Item.fromJson(ADarkDispositionData);
