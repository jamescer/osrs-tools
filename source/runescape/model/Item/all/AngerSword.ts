import { Item } from "../Item";

const AngerSwordData = {
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
    id: 7806,
    name: "Anger sword"
  }
export const AngerSword = Item.fromJson(AngerSwordData);
