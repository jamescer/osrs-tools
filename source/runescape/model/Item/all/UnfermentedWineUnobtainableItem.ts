import { Item } from "../Item";

const UnfermentedWineUnobtainableItemData = {
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
    id: 1996,
    name: "Unfermented wine (unobtainable item)"
  }
export const UnfermentedWineUnobtainableItem = Item.fromJson(UnfermentedWineUnobtainableItemData);
