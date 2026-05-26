import { Item } from "../Item";

const HarralanderTarData = {
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
    id: 10145,
    name: "Harralander tar"
  }
export const HarralanderTar = Item.fromJson(HarralanderTarData);
