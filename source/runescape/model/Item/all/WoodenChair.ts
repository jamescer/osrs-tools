import { Item } from "../Item";

const WoodenChairData = {{
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
    id: 8310,
    name: "Wooden chair"
  }
export const WoodenChair = Item.fromJson(WoodenChairData);