import { Item } from "../Item";

const ThievingBagData = {
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
    id: 23224,
    name: "Thieving bag"
  }
export const ThievingBag = Item.fromJson(ThievingBagData);
