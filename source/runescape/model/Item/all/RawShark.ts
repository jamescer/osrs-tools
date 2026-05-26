import { Item } from "../Item";

const RawSharkData = {
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
    id: 383,
    name: "Raw shark"
  }
export const RawShark = Item.fromJson(RawSharkData);
