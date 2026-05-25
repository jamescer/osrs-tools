import { Item } from "../Item";

const MagicBirdHouseData = {{
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
    id: 22201,
    name: "Magic bird house"
  }
export const MagicBirdHouse = Item.fromJson(MagicBirdHouseData);