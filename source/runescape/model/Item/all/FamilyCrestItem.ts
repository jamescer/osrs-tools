import { Item } from "../Item";

const FamilyCrestItemData = {
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
    id: 782,
    name: "Family crest (item)"
  }
export const FamilyCrestItem = Item.fromJson(FamilyCrestItemData);
