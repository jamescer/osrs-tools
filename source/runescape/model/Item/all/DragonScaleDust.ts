import { Item } from "../Item";

const DragonScaleDustData = {
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
    id: 241,
    name: "Dragon scale dust"
  }
export const DragonScaleDust = Item.fromJson(DragonScaleDustData);
