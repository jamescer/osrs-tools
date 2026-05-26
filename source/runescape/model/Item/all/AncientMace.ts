import { Item } from "../Item";

const AncientMaceData = {
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
    id: 11061,
    name: "Ancient mace"
  }
export const AncientMace = Item.fromJson(AncientMaceData);
