import { Item } from "../Item";

const AncientMedallionData = {
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
    id: 22299,
    name: "Ancient medallion"
  }
export const AncientMedallion = Item.fromJson(AncientMedallionData);
