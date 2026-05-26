import { Item } from "../Item";

const PureEssenceData = {
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
    id: 7936,
    name: "Pure essence"
  }
export const PureEssence = Item.fromJson(PureEssenceData);
