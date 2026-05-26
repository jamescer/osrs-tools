import { Item } from "../Item";

const NuffsCertificateData = {
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
    id: 9025,
    name: "Nuff's certificate"
  }
export const NuffsCertificate = Item.fromJson(NuffsCertificateData);
