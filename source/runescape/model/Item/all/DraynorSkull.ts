import { Item } from "../Item";

const DraynorSkullData = {
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
    id: 7408,
    name: "Draynor skull"
  }
export const DraynorSkull = Item.fromJson(DraynorSkullData);
