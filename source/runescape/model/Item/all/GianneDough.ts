import { Item } from "../Item";

const GianneDoughData = {
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
    id: 2171,
    name: "Gianne dough"
  }
export const GianneDough = Item.fromJson(GianneDoughData);
