import { Item } from "../Item";

const GuamTarData = {
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
    id: 10142,
    name: "Guam tar"
  }
export const GuamTar = Item.fromJson(GuamTarData);
