import { Item } from "../Item";

const RawGiantKrillData = {
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
    id: 32309,
    name: "Raw giant krill"
  }
export const RawGiantKrill = Item.fromJson(RawGiantKrillData);
