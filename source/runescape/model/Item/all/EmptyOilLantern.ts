import { Item } from "../Item";

const EmptyOilLanternData = {
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
    id: 4535,
    name: "Empty oil lantern"
  }
export const EmptyOilLantern = Item.fromJson(EmptyOilLanternData);
