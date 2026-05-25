import { Item } from "../Item";

const BookOfKnowledgeData = {{
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
    id: 11640,
    name: "Book of knowledge"
  }
export const BookOfKnowledge = Item.fromJson(BookOfKnowledgeData);