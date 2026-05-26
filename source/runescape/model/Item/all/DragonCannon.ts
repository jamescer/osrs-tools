import { Item } from "../Item";

const DragonCannonData = {
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
    id: 32205,
    name: "Dragon cannon"
  }
export const DragonCannon = Item.fromJson(DragonCannonData);
