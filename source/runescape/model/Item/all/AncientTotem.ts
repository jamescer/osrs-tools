import { Item } from "../Item";

const AncientTotemData = {
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
    id: 21810,
    name: "Ancient totem"
  }
export const AncientTotem = Item.fromJson(AncientTotemData);
