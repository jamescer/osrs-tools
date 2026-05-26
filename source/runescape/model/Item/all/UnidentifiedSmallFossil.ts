import { Item } from "../Item";

const UnidentifiedSmallFossilData = {
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
    id: 21562,
    name: "Unidentified small fossil"
  }
export const UnidentifiedSmallFossil = Item.fromJson(UnidentifiedSmallFossilData);
