import { Item } from "../Item";

const AngerMaceData = {
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
    id: 7808,
    name: "Anger mace"
  }
export const AngerMace = Item.fromJson(AngerMaceData);
