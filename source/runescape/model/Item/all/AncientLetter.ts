import { Item } from "../Item";

const AncientLetterData = {
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
    id: 22775,
    name: "Ancient letter"
  }
export const AncientLetter = Item.fromJson(AncientLetterData);
