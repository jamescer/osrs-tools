import { Item } from "../Item";

const GrimyArdrigalData = {
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
    id: 1527,
    name: "Grimy ardrigal"
  }
export const GrimyArdrigal = Item.fromJson(GrimyArdrigalData);
