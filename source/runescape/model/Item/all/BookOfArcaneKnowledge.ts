import { Item } from "../Item";

const BookOfArcaneKnowledgeData = {
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
    id: 13513,
    name: "Book of arcane knowledge"
  }
export const BookOfArcaneKnowledge = Item.fromJson(BookOfArcaneKnowledgeData);
