import { Item } from "../Item";

const OnyxNecklaceData = {
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
    id: 6577,
    name: "Onyx necklace"
  }
export const OnyxNecklace = Item.fromJson(OnyxNecklaceData);
