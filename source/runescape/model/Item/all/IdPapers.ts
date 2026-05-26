import { Item } from "../Item";

const IdPapersData = {
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
    id: 1584,
    name: "Id papers"
  }
export const IdPapers = Item.fromJson(IdPapersData);
