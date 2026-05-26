import { Item } from "../Item";

const BarrelOfCoalTarData = {
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
    id: 3220,
    name: "Barrel of coal tar"
  }
export const BarrelOfCoalTar = Item.fromJson(BarrelOfCoalTarData);
