import { Item } from "../Item";

const OnyxBraceletData = {
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
    id: 11130,
    name: "Onyx bracelet"
  }
export const OnyxBracelet = Item.fromJson(OnyxBraceletData);
