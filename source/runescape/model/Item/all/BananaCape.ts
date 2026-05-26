import { Item } from "../Item";

const BananaCapeData = {
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
    id: 25502,
    name: "Banana cape"
  }
export const BananaCape = Item.fromJson(BananaCapeData);
