import { Item } from "../Item";

const StoneRightLegData = {
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
    id: 7000,
    name: "Stone right leg"
  }
export const StoneRightLeg = Item.fromJson(StoneRightLegData);
