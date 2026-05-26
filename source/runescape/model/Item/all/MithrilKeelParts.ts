import { Item } from "../Item";

const MithrilKeelPartsData = {
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
    id: 32008,
    name: "Mithril keel parts"
  }
export const MithrilKeelParts = Item.fromJson(MithrilKeelPartsData);
