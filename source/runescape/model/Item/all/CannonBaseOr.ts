import { Item } from "../Item";

const CannonBaseOrData = {
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
    id: 26520,
    name: "Cannon base (or)"
  }
export const CannonBaseOr = Item.fromJson(CannonBaseOrData);
