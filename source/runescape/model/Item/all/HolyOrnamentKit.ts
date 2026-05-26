import { Item } from "../Item";

const HolyOrnamentKitData = {
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
    id: 25742,
    name: "Holy ornament kit"
  }
export const HolyOrnamentKit = Item.fromJson(HolyOrnamentKitData);
