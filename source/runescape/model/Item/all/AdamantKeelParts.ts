import { Item } from "../Item";

const AdamantKeelPartsData = {
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
    id: 32011,
    name: "Adamant keel parts"
  }
export const AdamantKeelParts = Item.fromJson(AdamantKeelPartsData);
