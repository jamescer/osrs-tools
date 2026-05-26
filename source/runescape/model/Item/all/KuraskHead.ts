import { Item } from "../Item";

const KuraskHeadData = {
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
    id: 7978,
    name: "Kurask head"
  }
export const KuraskHead = Item.fromJson(KuraskHeadData);
