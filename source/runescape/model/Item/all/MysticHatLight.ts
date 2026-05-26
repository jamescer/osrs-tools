import { Item } from "../Item";

const MysticHatLightData = {
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
    id: 4109,
    name: "Mystic hat (light)"
  }
export const MysticHatLight = Item.fromJson(MysticHatLightData);
