import { Item } from "../Item";

const FossilIslandNoteBookData = {
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
    id: 21662,
    name: "Fossil island note book"
  }
export const FossilIslandNoteBook = Item.fromJson(FossilIslandNoteBookData);
