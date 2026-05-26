import { Item } from "../Item";

const ScrumpledPaperData = {
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
    id: 1847,
    name: "Scrumpled paper"
  }
export const ScrumpledPaper = Item.fromJson(ScrumpledPaperData);
