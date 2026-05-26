import { Item } from "../Item";

const MeatPiefullData = {
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
    id: 2327,
    name: "Meat pie#Full"
  }
export const MeatPiefull = Item.fromJson(MeatPiefullData);
