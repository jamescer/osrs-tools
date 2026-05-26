import { Item } from "../Item";

const GoodAnthemData = {
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
    id: 3895,
    name: "Good anthem"
  }
export const GoodAnthem = Item.fromJson(GoodAnthemData);
