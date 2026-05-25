import { Item } from "../Item";

const ZanikItemData = {{
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
    id: 8870,
    name: "Zanik (item)"
  }
export const ZanikItem = Item.fromJson(ZanikItemData);