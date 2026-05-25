import { Item } from "../Item";

const DoctorsHatData = {{
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
    id: 6547,
    name: "Doctor's hat"
  }
export const DoctorsHat = Item.fromJson(DoctorsHatData);