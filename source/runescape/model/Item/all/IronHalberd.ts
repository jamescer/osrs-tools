import { Item } from "../Item";

const IronHalberdData = {
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
    id: 3192,
    name: "Iron halberd"
  }
export const IronHalberd = Item.fromJson(IronHalberdData);
