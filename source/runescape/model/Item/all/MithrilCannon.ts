import { Item } from "../Item";

const MithrilCannonData = {
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
    id: 32202,
    name: "Mithril cannon"
  }
export const MithrilCannon = Item.fromJson(MithrilCannonData);
