import { Item } from "../Item";

const EssenceImplingJarData = {
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
    id: 11246,
    name: "Essence impling jar"
  }
export const EssenceImplingJar = Item.fromJson(EssenceImplingJarData);
