import { Item } from "../Item";

const CapeHangerData = {
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
    id: 20632,
    name: "Cape hanger"
  }
export const CapeHanger = Item.fromJson(CapeHangerData);
