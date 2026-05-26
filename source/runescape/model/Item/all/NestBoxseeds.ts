import { Item } from "../Item";

const NestBoxseedsData = {
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
    id: 23062,
    name: "Nest box#Seeds"
  }
export const NestBoxseeds = Item.fromJson(NestBoxseedsData);
