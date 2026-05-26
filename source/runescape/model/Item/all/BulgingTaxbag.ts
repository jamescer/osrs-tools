import { Item } from "../Item";

const BulgingTaxbagData = {
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
    id: 10835,
    name: "Bulging taxbag"
  }
export const BulgingTaxbag = Item.fromJson(BulgingTaxbagData);
