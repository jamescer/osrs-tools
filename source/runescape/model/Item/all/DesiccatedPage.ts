import { Item } from "../Item";

const DesiccatedPageData = {
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
    id: 30640,
    name: "Desiccated page"
  }
export const DesiccatedPage = Item.fromJson(DesiccatedPageData);
