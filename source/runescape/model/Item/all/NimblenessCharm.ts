import { Item } from "../Item";

const NimblenessCharmData = {
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
    id: 30676,
    name: "Nimbleness charm"
  }
export const NimblenessCharm = Item.fromJson(NimblenessCharmData);
