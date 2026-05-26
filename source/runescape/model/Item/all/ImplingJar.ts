import { Item } from "../Item";

const ImplingJarData = {
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
    id: 11260,
    name: "Impling jar"
  }
export const ImplingJar = Item.fromJson(ImplingJarData);
